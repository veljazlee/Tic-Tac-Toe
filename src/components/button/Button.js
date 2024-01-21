import styles from './Button.module.css'

function Button(props) {
      return <button id = {styles.button} type = 'button' onClick ={props.onClick} ref = {props.buttonRef}>
        {props.text}
        </button>
}

export default Button;