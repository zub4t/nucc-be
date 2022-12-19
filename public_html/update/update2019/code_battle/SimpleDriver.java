package scr;

public class SimpleDriver extends Controller{
	
	/* Constantes para mudança de emgrenagens, atraves dos rpm*/
	final int[]  gearUp={5000,6000,6000,6500,7000,0};
	final int[]  gearDown={0,2500,3000,3000,3500,3500};

	/* Stuck constants*/
	final int  stuckTime = 25;
	final float  stuckAngle = (float) 0.523598775; //PI/6

	/* Accel and Brake Constants*/
	final float maxSpeedDist=70;
	final float maxSpeed=150;
	final float sin5 = (float) 0.08716;
	final float cos5 = (float) 0.99619;

	/* Steering constants*/
	final float steerLock=(float) 0.366519;
	final float steerSensitivityOffset=(float) 80.0;
	final float wheelSensitivityCoeff=1;

	/* Clutching Constants */
	final float clutchMax=(float) 0.5;
	final float clutchDelta=(float) 0.05;
	final float clutchRange=(float) 0.82;
	final float clutchDeltaTime=(float) 0.02;
	final float clutchDeltaRaced=10;
	final float clutchDec=(float) 0.01;
	final float clutchMaxModifier=(float) 1.3;
	final float clutchMaxTime=(float) 1.5;
	
	private int stuck=0;

	// current clutch
	private float clutch=0;
	
	public void reset() {
		System.out.println("Restarting the race!");
		
	}

	public void shutdown() {
		System.out.println("Bye bye!");		
	}
	
	
	private int getGear(SensorModel sensors){
	    int gear = sensors.getGear();
	    double rpm  = sensors.getRPM();

	    // if gear is 0 (N) or -1 (R) just return 1 
	    if (gear<1)
	        return 1;
	    // check if the RPM value of car is greater than the one suggested 
	    // to shift up the gear from the current one     
	    if (gear <3 && rpm >= gearUp[gear-1])
	        return gear + 1;
	    else
	    	// check if the RPM value of car is lower than the one suggested 
	    	// to shift down the gear from the current one
	        if (gear > 1 && rpm <= gearDown[gear-1])
	            return gear - 1;
	        else // otherwhise keep current gear
	            return gear;
	}

	private float getSteer(SensorModel sensors){
		// steering angle is compute by correcting the actual car angle w.r.t. to track 
		// axis [sensors.getAngle()] and to adjust car position w.r.t to middle of track [sensors.getTrackPos()*0.5]
	    float targetAngle=(float) (sensors.getAngleToTrackAxis()-sensors.getTrackPosition()*0.2);
	    // at high speed reduce the steering command to avoid loosing the control
	    if (sensors.getSpeed() > steerSensitivityOffset)
	        return (float) (targetAngle/(steerLock*(sensors.getSpeed()-steerSensitivityOffset)*wheelSensitivityCoeff));
	    else
	        return (targetAngle)/steerLock;

	}
	
	private float getAccel(SensorModel sensors)
	{
	    // checks if car is out of track
	    if (sensors.getTrackPosition() < 1 && sensors.getTrackPosition() > -1)
	    {
	        // reading of sensor at +5 degree w.r.t. car axis
	        float rxSensor=(float) sensors.getTrackEdgeSensors()[10];
	        // reading of sensor parallel to car axis
	        float sensorsensor=(float) sensors.getTrackEdgeSensors()[9];
	        // reading of sensor at -5 degree w.r.t. car axis
	        float sxSensor=(float) sensors.getTrackEdgeSensors()[8];

	        float targetSpeed;

	        // track is straight and enough far from a turn so goes to max speed
	        if (sensorsensor>maxSpeedDist || (sensorsensor>=rxSensor && sensorsensor >= sxSensor))
	            targetSpeed = maxSpeed;
	        else
	        {
	            // approaching a turn on right
	            if(rxSensor>sxSensor)
	            {
	                // computing approximately the "angle" of turn
	                float h = sensorsensor*sin5;
	                float b = rxSensor - sensorsensor*cos5;
	                float sinAngle = b*b/(h*h+b*b);
	                // estimate the target speed depending on turn and on how close it is
	                targetSpeed = maxSpeed*(sensorsensor*sinAngle/maxSpeedDist);
	            }
	            // approaching a turn on left
	            else
	            {
	                // computing approximately the "angle" of turn
	                float h = sensorsensor*sin5;
	                float b = sxSensor - sensorsensor*cos5;
	                float sinAngle = b*b/(h*h+b*b);
	                // estimate the target speed depending on turn and on how close it is
	                targetSpeed = maxSpeed*(sensorsensor*sinAngle/maxSpeedDist);
	            }

	        }

	        // accel/brake command is exponentially scaled w.r.t. the difference between target speed and current one
	        return (float) (2/(1+Math.exp(sensors.getSpeed() - targetSpeed)) - 1);
	    }
	    else
	        return (float) 0.3; // when out of track returns a moderate acceleration command

	}

	public Action control(SensorModel sensors){
		
	    	// compute accel/brake command
	        float accel_and_brake = getAccel(sensors);
	        // compute gear 
	        int gear = getGear(sensors);
	        // compute steering
	        float steer = getSteer(sensors);
	        

	        // normalize steering
	        if (steer < -1)
	            steer = -1;
	        if (steer > 1)
	            steer = 1;
	        
	        // set accel and brake from the joint accel/brake command 
	        float accel,brake;
	        if (accel_and_brake>0)
	        {
	            accel = accel_and_brake;
	            brake = 0;
	        }
	        else
	        {
	            accel = 0;
	        }
	        
	        clutch = clutching(sensors, clutch);
	        
	        // build a CarControl variable and return it
	        Action action = new Action ();
	        action.gear = gear;
	        action.steering = steer;
	        action.accelerate = accel;
	       	//action.brake = brake;
	        action.clutch = clutch;
	        return action;
	    
	}
	
	float clutching(SensorModel sensors, float clutch)
	{
	  	 
	  float maxClutch = clutchMax;

	  // Check if the current situation is the race start
	  if (sensors.getCurrentLapTime()<clutchDeltaTime  && getStage()==Stage.RACE && sensors.getDistanceRaced()<clutchDeltaRaced)
	    clutch = maxClutch;

	  // Adjust the current value of the clutch
	  if(clutch > 0)
	  {
	    double delta = clutchDelta;
	    if (sensors.getGear() < 2)
		{
	      // Apply a stronger clutch output when the gear is one and the race is just started
		  delta /= 2;
	      maxClutch *= clutchMaxModifier;
	      if (sensors.getCurrentLapTime() < clutchMaxTime)
	        clutch = maxClutch;
		}

	    // check clutch is not bigger than maximum values
		clutch = Math.min(maxClutch,clutch);

		// if clutch is not at max value decrease it quite quickly
		if (clutch!=maxClutch)
		{
		  clutch -= delta;
		  clutch = Math.max((float) 0.0,clutch);
		}
		
		// if clutch is at max value decrease it very slowly
		else
			clutch -= clutchDec;
	  }
	  return clutch;
	}
	
	public float[] initAngles()	{
		
		float[] angles = new float[19];
		// set angles as {-90,-75,-60,-45,-30,-20,-15,-10,-5,0,5,10,15,20,30,45,60,75,90} 
		for (int i=0; i<5; i++)
		{
			angles[i]=-90+i*15;
			angles[18-i]=90-i*15;
		}

		for (int i=5; i<9; i++)
		{
				angles[i]=-20+(i-5)*5;
				angles[18-i]=20-(i-5)*5;
		}
		angles[9]=0;
		return angles;
	}
}
