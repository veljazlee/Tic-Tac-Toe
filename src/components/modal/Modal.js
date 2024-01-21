import React from 'react';
import styles from './Modal.module.css';
import Button from '../button/Button';

function Modal(props) {

    
    
    return <div className = {styles.modalBackdrop} onClick = {props.backdropClick}>
        <div className = {styles.modal}>
            <div id = {styles.text}>
                {props.text}
            </div>
            <div className ={styles.buttonContainer}>
                <Button text={'NO'}  onClick = {props.modalNo}/>
                <Button text={'YES'} onClick = {props.modalYes}/>
            </div>
        </div>
    </div>
    
}

export default Modal;