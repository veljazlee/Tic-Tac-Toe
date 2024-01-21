import styles from './Description.module.css';


function Description(props) {
    return <article className = {styles.description}>
        <p className = {styles.text}>{props.text} </p>      
    </article>
}

export default Description;