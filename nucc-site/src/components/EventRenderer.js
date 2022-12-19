import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const EventRenderer = ({
                           index,
                           photo,
                           margin,
                           direction,
                           top,
                           left,
                           selected,
                           pathName
                       }) => {

    return (
        <div key={index}
            style={{ margin, height: photo.height, width: photo.width }}
        >
            <Link className="nav-link"
                  to={{
                pathname: `/evento/${index}`
                    }} >
                <img
                    {...photo}
                />
            </Link>
        </div>
    );
};

export default EventRenderer;
