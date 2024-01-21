import React from 'react';
import Context from '../../context/Context';
import Button from '../../button/Button';
import styles from './resetButton.module.css';
import Modal from '../../modal/Modal';
import ReactDOM from 'react-dom';

function ResetButton() {
    const ctx = React.useContext(Context);
    const  [showModal, setShowModal] = React.useState(false);

    function backdropClick(ev) {
        ev.stopPropagation();
        setShowModal(false);
    }

    function modalNo() {
        setShowModal(false);
    }
    function modalYes() {
        ctx.resetScore();
    }

    function displayModal(){
        if(ctx.game.player1Score !== 0 || ctx.game.player2Score !==0) {
            setShowModal(true);
        }
    }
    
    return <div className ={styles.resetButtonContainer}>
                <Button text={'RESET SCORE'} onClick = {displayModal}/>
                {showModal === true && ReactDOM.createPortal(<Modal text={'Are you sure that you want to reset score?'}
                                                                    modalNo = {modalNo}
                                                                    modalYes = {modalYes}
                                                                    backdropClick = {backdropClick}
                                                                                                />, ctx.overlayRef.current)}
            </div>
}

export default ResetButton;