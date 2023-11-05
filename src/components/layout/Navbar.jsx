import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../assets/react.svg'

function Navbar(){
    return(
            <Container>
                <nav className={styles.nav}>
                    <li>
                        <Link to='costs_deploy'>
                            <img src={logo} alt="logo react" />
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <Link to='costs_deploy'>Home</Link>
                        </li>
                        <li>
                            <Link to='costs_deploy/company'>Empresa</Link>
                        </li>
                        <li>
                            <Link to='costs_deploy/contact'>Contato</Link>
                        </li>
                        <li>
                            <Link to='costs_deploy/projects'>Projetos</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
    )
}

export default Navbar