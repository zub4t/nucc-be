import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const Map = () => (
    <div className="map">
        <h1 className="map-h2 bg-light">Localização</h1>
        <div className="google-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8934.492716492514!2d-8.644686577800984!3d41.15140169529002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465748665b511%3A0x652241b7e04eb60a!2sDepartamento+de+Ci%C3%AAncia+de+Computadores+FCUP!5e0!3m2!1spt-PT!2spt!4v1546464996576"
                width="100%" height="450" frameBorder="0" allowFullScreen=""></iframe>
        </div>
    </div>
)

export default Map;