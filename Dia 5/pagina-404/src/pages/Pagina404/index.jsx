import React from 'react'
import './style.css'
import ImgFundo from '../../assets/img/background-404.png'
const Pagina404 = () => {

    return (
        <main>
            <img className="img404" src={ImgFundo} alt="" />
            <div className="main">
                <div className="texto">
                    <h1>Erro 404</h1>
                    <h2>Princesa não encontrada!</h2>
                    <h3>A princesa que você está procurando está em outro castelo!</h3>
                </div>
            </div>
        </main>

    )
}

export default Pagina404