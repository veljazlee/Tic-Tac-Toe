import React from 'react';
import Context from '../../context/Context';
import styles from './Score.module.css';


function Score() {
    let ctx = React.useContext(Context);
    return <div id={styles.score}>
            <div className ={styles.names}>
                <div id={styles.playerName}>{ctx.player1Name}</div>
                <div id={styles.playerName}>{ctx.player2Name}</div>
            </div>
            <div className ={styles.resultContainer}>
            <div className={styles.result}> {ctx.game.player1Score}</div>
            <div className ={styles.result}> {ctx.game.player2Score}</div>
            </div>
            
    </div>
}

export default Score;
