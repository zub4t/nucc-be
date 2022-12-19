import React from "react";

const LocationPin = ({ text }) => (
    <div className="pin">
        <i className="fas fa-map-marker-alt fa-3x"></i>
        <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin;