import React from 'react';
import FooterContainer from '../styled-components/FooterContainer';
import '@fortawesome/fontawesome-free/js/all.js';
import Map from './Map';

const EventsBanner = () => {
    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center text-center"
                 style={{background: "transparent url('/img/eventos-banner.png') no-repeat center center /cover",
                 height:'650px'}}
            >
                <div className="col-4 mr-5">
                    <div style={{marginTop:"310px"}}>
                        <h1 style={{fontSize:"5rem"}} className="ml-4">Eventos</h1>
                        <p>Descobre o que andamos a fazer e junta-te a nós!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsBanner;