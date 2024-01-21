import styles from './Header.module.css';
import Row from './row/Row';
import Image from './image/Image';

function Header(props) {
    let rows = props.text.rows.map((element, index) => <Row dataName= {element.dataName} data = {element.data} key = {index}/>)
    return <div className = {styles.header}>
        <Image myImage = {props.myImage}/>
        <div className = {styles.info}>
            <div id = {styles.ime}>
                <h1>{props.text.name}</h1>
            </div>
            {rows}
        </div>

    </div>
}

export default Header;