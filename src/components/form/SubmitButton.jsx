import styles from './SubmitButton.module.css'

function SubmitButton({ text, action }){
    return(
        <div className={styles.submit}>
            <button formAction={action}>{text}</button>
        </div>
    )
}

export default SubmitButton