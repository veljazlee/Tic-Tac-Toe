import styles from './Contact.module.css';
import Row from '../header/row/Row';

function Contact(props) {
    let rows = props.text.map((element, index) => <Row dataName = {element.dataName} data = {element.data} key = {index}/>)
    return <div id = {styles.contact}>
        {rows}
    </div>
}

export default Contact;