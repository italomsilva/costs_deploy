import styles from './FormCamp.module.css'

function FormCamp({ type, text, name, placeholder, handleOnChange, value }){
    return(
        <div className={styles.formcamp}>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            handleOnChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default FormCamp