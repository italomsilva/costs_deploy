import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../assets/react.svg'

function Navbar(){
    return(
            <Container>
                <nav className={styles.nav}>
                    <li>
                        <Link to='/'>
                            <img src={logo} alt="logo react" />
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/company'>Empresa</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contato</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projetos</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
    )
}

export default Navbar