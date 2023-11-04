import style from './Home.module.css'
import BtnClassic from '../layout/BtnClassic'
import logo from '../../assets/react.svg'


function Home(){
    return(
        <section className={style.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <p>
                <BtnClassic road="/newproject" text="Criar Projeto"/>
            </p>
            <div>
                <img src={logo} alt="" />
            </div>
        </section>
    )
}

export default Home