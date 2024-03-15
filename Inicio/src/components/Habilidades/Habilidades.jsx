import './Habilidade.css'
import Linguagem from '../Props/Linguagem'
import Header from '../Props/Header'
import React from '../../img/React.png'
import JS from '../../img/JavaScrip'
import CSS from '../../img/CSS 3.png'
import HTML from '../../img/HTML 5.png'
import DB from '../../img/DB Relacional.png'
import Node from '../../img/NodeJS.png'

const Habilidades = () => {

    return (

        <>

            <Header titulo="Habilidades" />

            <div className='styleItens'>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img} />


                </div>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img2} />


                </div>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img3} />


                </div>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img4} />


                </div>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img5} />


                </div>

                <div className='styleItem'>

                    <p>ReactJS</p>
                    <img src={img5} />


                </div>

            </div>

        </>

    )

}

export default Habilidades;