import FormCamp from "../form/FormCamp"
import style from "./NewProject.module.css"
import SubmitButton from "../form/Submitbutton"
import Select from "../form/Select"

import { useState, useEffect } from "react"

function NewProject(){

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    }, []
    )

    return(
        <section  className={style.new_project}>
            <h1>Crie seu projeto</h1>
            <p>crie aqui seu projeto para depois adicionar um serviço</p>
            <form>
            <FormCamp
                type="text"
                name="nomeprojeto"
                text="Nome do projeto"
                placeholder="Digite o nome do projeto"
            />
            <FormCamp
                type="text"
                name="orcamento"
                text="Orçamento do projeto"
                placeholder="Digite o orçamento do projeto"
            />
            <Select
            text="Selecione a categoria"
            name="slct_category"
            option={categories}
            />
            <SubmitButton text="Criar Projeto"/>
            </form>
        </section>
    )
}

export default NewProject