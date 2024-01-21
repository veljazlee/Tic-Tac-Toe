import Context from '../../context/Context';
import React from 'react';
import styles from './GameOutcome.module.css';

function GameOutcome() {
    const ctx = React.useContext(Context);
    return <div id={styles.outcome}>
                
                {ctx.game.draw && <div id={styles.boomContainer}>The game is draw</div>}
                {ctx.game.win && <div id={styles.boomContainer}>{ctx.game.winner} wins!</div>} 
            
    </div>
}
export default GameOutcome;