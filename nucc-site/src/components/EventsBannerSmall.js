import React from 'react';
import FooterContainer from '../styled-components/FooterContainer';
import '@fortawesome/fontawesome-free/js/all.js';
import Map from './Map';

const EventsBannerSmall = () => {
    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center text-center">
                    <img className="pr-4" src="img/eventos-banner-small.png"/>
                    <div>
                        <h1 style={{fontSize:"3rem"}} >Eventos</h1>
                        <p>Descobre o que andamos a fazer e junta-te a nós!</p>
                    </div>
            </div>
        </div>
    )
}

export default EventsBannerSmall;