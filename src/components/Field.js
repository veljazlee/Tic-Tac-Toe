import styles from './Field.module.css';
import React from 'react';
import Context from '../components/context/Context';

function Field(props) {
    let character='';
    const ctx = React.useContext(Context);
    let fieldIsClicked = ctx.game.clickedFields.find((element) => element === props.index) !== undefined;
    let classes = fieldIsClicked || ctx.game.fieldsLeft.length === 0 || (ctx.game.playerOnMove === 2 && ctx.game.onePlayer) ? `${styles.field}` : `${styles.field} ${styles.grow}`;
    if(fieldIsClicked) {
        character = ctx.game.player1Moves.find((element) => element === props.index) !== undefined ? 'X' : 'O';
    }

    if(ctx.game.winFields.find((element) => element === props.index) !== undefined) {
        classes = `${styles.field} ${styles.shadow}`
    }

 return <div className = {classes} id = {props.index}>{character}</div>
 
}

export default Field;