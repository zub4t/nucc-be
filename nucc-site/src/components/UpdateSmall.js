import React from 'react';

const UpdateSmall = () => {
    return (
        <div className="container mt-5 mb-5 pb-5 ">
            <div className="row justify-content-center">
                <div className="row justify-content-center border-bottom border-top">
                    <h1 className="font-weight-light" >O nosso evento anual</h1>
                </div>
                <a href="https://nucc.dcc.fc.up.pt/update/update2018/">
                    <img className="w-100 p-3" src="img/update_2018.png"/>
                </a>
                <a href="https://nucc.dcc.fc.up.pt/update/update2019/">
                    <img className="w-100 p-3" src="img/update_2019.png"/>
                </a>
                <a href="https://nucc.dcc.fc.up.pt/update/update2020/">
                    <img className="w-100 p-3" src="img/update_2020.png"/>
                </a>
            </div>
        </div>
    )
}

export default UpdateSmall;