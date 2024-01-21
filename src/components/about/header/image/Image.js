import styles from './Image.module.css';

function Image(props) {
    return  <img alt='me' src ={props.myImage} className = {styles.img}/>
}

export default Image;