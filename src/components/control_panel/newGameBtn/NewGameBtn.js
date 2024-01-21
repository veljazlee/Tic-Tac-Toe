import styles from './NewGameBtn.module.css';
import React from 'react';
import Context from '../../context/Context';
import Button from '../../button/Button';


function NewGameBtn(props) {
    
    const ctx = React.useContext(Context);
    const ref = React.useRef(null);

    if(ctx.game.fieldsLeft.length < 9) {ref.current.disabled = true}
    if(ctx.game.win === true || ctx.game.draw === true) {
        ref.current.disabled = false;
    }
    


    function handleRef() {
        let disableBtn = false;
        if(ctx.game.onePlayer === true && ctx.game.playerOnMove === 1) {disableBtn = true;}
        ref.current.disabled = disableBtn;
    }

    
    
    
    
    return <div className={styles.startBtnContainer}>
        <Button text = {'NEW GAME'} onClick = {() => {handleRef();ctx.newGame();}}  buttonRef = {ref}/>
        
        </div>
}
export default NewGameBtn;