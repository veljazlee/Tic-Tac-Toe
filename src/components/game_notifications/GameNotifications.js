
import React from 'react';
import styles from './GameNotifications.module.css';
import Qoutes from '../game_notifications/qoutes/Qoutes';
import GameOutcome from './game_outcome/GameOutcome'

function GameNotifications() {
    let classes = `${styles.dialogue}`;
    const [state, setState] = React.useState({move:0, classes:classes});
    
    
    if(state.move=== 1) {classes = `${styles.dialogue} ${styles.dialogueYoda}`; setState((old)=>{return {move: old.move+1, classes: classes}})}
    return <div className={styles.mainContainer}>
        <div id={styles.yoda}></div>
            <div id={styles.msg}>
                <Qoutes/>
                <GameOutcome />
            </div>
        <div id={styles.anakin}></div>
    </div>
}

export default GameNotifications;