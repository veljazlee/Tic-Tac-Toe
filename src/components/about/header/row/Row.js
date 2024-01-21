import styles from './Row.module.css'

function Row(props) {
    let data = props.data.includes('http') ? <a href = {props.data}>{props.data}</a> : props.data
    return <div className = {styles.row}>
    <div className = {styles.dataName}>
        <span className ={styles.span}>{props.dataName}</span>
    </div>
    <div className = {styles.data}>
        <p>{data}</p>
    </div>
    </div>
}

export default Row;