import React from 'react';
import styles from './GameType.module.css';
import Context from '../../context/Context';


function GameType() {
    
    const ctx = React.useContext(Context);
    let btn1Classes = ctx.game.onePlayer === true ? `${styles.btn} ${styles.btnON}` : `${styles.btn}`;
    let btn2Classes = ctx.game.onePlayer === false ? `${styles.btn} ${styles.btnON}` : `${styles.btn}`;
   
    function changePlayerMode(ev) {
        ctx.changeNumberOfPlayers();
        
    }

    return <div id = {styles.mainContainer}>
    <div className ={styles.btnContainer}>
        <button type='button' className = {btn1Classes} id='btn1' onClick = {changePlayerMode}></button>
        <div className = {styles.playerGame}>1 player</div>
    </div>
    <div className ={styles.btnContainer}>
    <button type='button' className = {btn2Classes} id='btn2' onClick = {changePlayerMode}></button>
        <div className = {styles.playerGame}>2 players</div>
    </div>
    
   </div>
}

export default GameType;