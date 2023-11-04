import { Link } from "react-router-dom"
import style from './BtnClassic.module.css'

function BtnClassic({road, text}) {
    return(
        <Link className={style.btn_classic} to={road}>{text}</Link>
    )
}

export default BtnClassic