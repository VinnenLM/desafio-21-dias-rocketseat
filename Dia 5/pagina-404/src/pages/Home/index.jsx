import React from 'react'
import './style.css'
import ImgFundo from '../../assets/img/background-padrao2.png'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <main>
            <img className="imgFundo" src={ImgFundo} alt="" />
            <div className="botao">
                <Link to="/princesa"><button>Procurar Princesa</button></Link>
            </div>
        </main>

    )
}

export default Home