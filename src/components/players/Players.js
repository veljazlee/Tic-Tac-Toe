import React from 'react';
import styles from './Players.module.css';
import Context from '../context/Context';

function Players(props) {
    
    const ctx = React.useContext(Context);
    let player1class = ctx.game.playerOnMove === 1 ? styles.playerON + ' ' + styles.playersTurnDiv : styles.playersTurnDiv;
    let player2class = ctx.game.playerOnMove === 2 ? styles.playerON + ' ' + styles.playersTurnDiv : styles.playersTurnDiv;
    if(ctx.game.win === true || ctx.game.draw === true) {
        player1class = styles.playersTurnDiv;
        player2class = styles.playersTurnDiv;
    }
    
    
    return <div id={styles.playersDiv}>
    <div id='player1TurnDiv' className = {player1class}>
        <input 
            name = 'player1Input'
            value={ctx.player1Name} 
            className={styles.input} 
            onFocus={(ev)=>{ctx.changeName1('')}}
            onChange={(ev)=>{ctx.changeName1(ev.target.value)}}
            onBlur={(ev)=>{ctx.player1Name || ctx.changeName1('Master Yoda')}}
        />
    </div>
    <div id='player2TurnDiv' className = {player2class}>
        <input 
            name = 'player2Input'
            value={ctx.player2Name}  
            className={styles.input}
            onFocus={(ev)=>{!ctx.game.onePlayer && ctx.changeName2('')}}
            onChange={(ev)=>{!ctx.game.onePlayer && ctx.changeName2(ev.target.value)}}
            onBlur={(ev)=>{ctx.player2Name || ctx.changeName2('Darth Vader')}}
        />
        
    </div>
    </div>

}

export default Players;