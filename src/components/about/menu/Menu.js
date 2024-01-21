import React from 'react';
import styles from './Menu.module.css'

function Menu(props) {
    let class1;
    let class2;
    if(props.aboutMe === true) {
        class1 = `${styles.tab1} ${styles.tab}`;
        class2 = `${styles.tab2} ${styles.tab}`;
    } else {
        class1 = `${styles.tab2} ${styles.tab}`;
        class2 = `${styles.tab1} ${styles.tab}`;
    }
    return <div id={styles.menu} onClick = {props.handler}>
    <div className = {class1} id = {1} >About me</div>
    <div className = {class2} id = {2} >About game</div>
</div>
}

export default Menu;
 