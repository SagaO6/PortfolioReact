import Logo from '../../img/Imagem.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (

        <header className='containerHeader'>

            <div className='styleHeader'>

                <img src={Logo}/>
                <h2>{props.titulo}</h2>

            </div>

            <Link to='/'>

                <FontAwesomeIcon className='icone' icon={faHouseChimney} />

            </Link>

        </header>

    )

}

export default Header