import React from 'react';

const Sobre = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-7 text-center">
                    <h1 className="title">
                        Sobre nós
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-10 text-center text-justify">
                    <p>
                        O NuCC foi criado pelos alunos do Departamento de Ciências de Computadores com o objectivo de dar
                        mais formação e apoio aos estudantes do DCC. A nossa missão vai desde organizar workshops ou palestras
                        até camisolas de curso, passando também por tirar dúvidas sobre temas relacionados com o curso.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Sobre;