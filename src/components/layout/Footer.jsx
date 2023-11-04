import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer(){
    return(
        <footer className={styles.foot}>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>Costs &copy; 2023</span></p>
        </footer>
    )
}

export default Footer