import React from 'react';
import Field from '../Field';
import styles from './FieldsContainer.module.css'

function FieldsContainer(props) {
    return <div id={styles.container} onClick = {props.clickHandler}>
    <div className = {styles.row}><Field index = {1}/><Field index = {2}/><Field index = {3}/></div>
    <div className = {styles.row}><Field index = {4}/><Field index = {5}/><Field index = {6}/></div>
    <div className = {styles.row}><Field index = {7}/><Field index = {8}/><Field index = {9}/></div>
    </div>
}

export default FieldsContainer;