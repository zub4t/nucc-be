import styled from "styled-components";

//100vh not very nice 

export default styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh; 
    
    .title::after {
        content: "";
        display: block;
        border: 2px solid #1e4120;
        width: 24%;
        margin: 10px auto;
    }
    
    .carousel-custom {
        position: relative;
    }
    
    .carousel-indicators li{
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    
    .carousel-inner::after {
        display: block;
        clear: both;
        content: "";
    }
    
    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    
    .carousel-item {
        position: relative;
        float: left;
        width: 100%;
        margin-right: -100%;
        backface-visibility: hidden;
        -webkit-background-size: cover;
        transition: transform 0.6s ease-in-out;
        height: 100vh;
        min-height: 350px;
    }
    
    #carousel-img1 {
        background: linear-gradient(to top, transparent 0%, #000 130%), url('/img/slide1.png') center center scroll;
        background-size: auto;
        background-size: cover;
    }
    
    #carousel-img2 {
        background: linear-gradient(to top, transparent 0%, #000 130%), url('/img/slide2.png') center center scroll;
        background-size: auto;
        background-size: cover;
    }
    
    #carousel-img3 {
        background: linear-gradient(to top, transparent 0%, #000 130%), url('/img/slide3.png') center center scroll;
        background-size: auto;
        background-size: cover;
    }
    
        .map-h2 {
      text-transform: uppercase;
      font-size: 3rem;
      padding: 20px;
      padding-left: 10px;
      text-align: center;
      margin-bottom: 0;
    }

    .google-map {
      width: 100%;
      height: 54vh;
    }

`;