import style from './Select.module.css'

function Select({ text, name, option, handleOnChange, value }){
    return(
        <div className={style.select}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select