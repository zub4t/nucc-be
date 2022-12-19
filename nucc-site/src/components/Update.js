import React from 'react';

const Update = () => {
    return (
            <div className="container mt-5 mb-5 pb-5 ">
                <div className="row justify-content-center border-bottom border-top mb-4">
                    <h1 className="font-weight-light" >O nosso evento anual</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 ">
                        <a href="https://nucc.dcc.fc.up.pt/update/update2018/">
                        <img className="w-100" src="img/update_2018.png"/>
                        </a>
                    </div>
                    <div  className="col-4 ">
                        <a href="https://nucc.dcc.fc.up.pt/update/update2019/">
                        <img className="w-100" src="img/update_2019.png"/>
                        </a>
                    </div>
                    <div  className="col-4">
                        <a href="https://nucc.dcc.fc.up.pt/update/update2020/">
                        <img className="w-100" src="img/update_2020.png"/>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Update;