import { Link } from 'react-router-dom'
import Logo from '../../img/Imagem.png'
import './Home.css'

const Home = () => {

    return (
        <>

            <div className='home'>

                <div>

                    <h1>Oi, me chamo <span>Thiago!</span></h1>
                    <h3>Sou desenvolvedor Full Stack</h3>

                </div>

                <div>

                    <img src={Logo} alt="Logo" className='logo' />

                </div>

            </div>

            <div className='menu'>


                <div className='sobreMimLink'>

                    <Link to='/SobreMim'>
                        Sobre Mim
                    </Link>

                </div>

                <div className='sobreMimLink'>

                    <Link to='/MeusProjetos'>
                        MeusProjetos
                    </Link>

                </div>


            </div>

        </>
    )

}

export default Home