import React from 'react';
import styles from './ControlPanel.module.css';
import NewGameBtn from './newGameBtn/NewGameBtn';
import Score from './score/Score';
import ResetButton from './resetButton/ResetButton';
import GameType from './game_type/GameType';

function ControlPanel() {
    return <div className={styles.controlPanel}>
               <NewGameBtn/>
               <GameType/>
               <Score/>
               <ResetButton/>
            </div>
}         

export default ControlPanel;