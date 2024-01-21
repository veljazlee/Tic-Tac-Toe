import React from 'react';
import FieldsContainer from './components/fields_container/FieldsContainer';
import Players from './components/players/Players';
import styles from './App.module.css';
import ControlPanel from '../src/components/control_panel/ControlPanel';
import Context from '../src/components/context/Context';
import Tools from './tools/tools';
import GameNotifications from './components/game_notifications/GameNotifications';
import About from './components/about/About';

function App() {
    const [player1Name, setPlayer1] = React.useState('Master Yoda');
    const [player2Name, setPlayer2] = React.useState('Darth Vader');
    const overlay = React.useRef(null);
    


    function reducer(state, action) {
        let newState={...state};
        switch(action.type) {
            case 'nextMove' : newState.playerOnMove =  action.value.playerOnMove;
                              newState.fieldsLeft = action.value.fieldsLeft;
                              newState.clickedfields = action.value.clickedFields;
                              newState.player1Moves = action.value.player1Moves;
                              newState.player2Moves = action.value.player2Moves;
                              
            break;
            case 'win' : newState.win=true;
                         newState.fieldsLeft = []; 
                         newState.winner = action.value.winner;
                         newState.winFields = action.value.winFields;
                         newState.player1Score = action.value.player1Score;
                         newState.player2Score = action.value.player2Score;
                         
                        
            break;
            case 'draw' : newState.draw = true;
                          newState.fieldsLeft = [];
            break;
            case 'new_game' : newState.win = false;
                             newState.draw = false;
                             newState.winner = '';
                             newState.winFields = [];
                             newState.fieldsLeft = [1,2,3,4,5,6,7,8,9];
                             newState.clickedFields = [];
                             newState.player1Moves = [];
                             newState.player2Moves = [];
                             newState.playerToStart =  state.playerToStart % 2 +1; 
                             newState.playerOnMove = state.playerToStart %2 +1;            
            break;
            case 'resetScore': newState.player1Score = 0;
                               newState.player2Score = 0;
            break;
            case 'changeNumberOfPlayers' : newState.onePlayer = !state.onePlayer;
            break;
            case 'directWin' : state.playerOnMove === 1 ? newState.player2Score++ : newState.player1Score++;
            break;
            default: ;
        }
        return newState;
    }

    const [gameState, dispatch] = React.useReducer(reducer, {
                                                                win:false, 
                                                                draw: false, 
                                                                winnerName:'',
                                                                fieldsLeft: [1,2,3,4,5,6,7,8,9],
                                                                clickedFields: [],
                                                                winFields: [],
                                                                playerOnMove: 1,
                                                                playerToStart: 1,
                                                                player1Moves:[],
                                                                player2Moves: [], 
                                                                player1Score:0, 
                                                                player2Score:0,
                                                                onePlayer: true,
                                                                overlay: overlay,                                                 
                                                            }
    );


    

    function newGame() {
        dispatch({type: 'new_game'});    
    }

    function resetScore() {
        dispatch({type: 'resetScore'});
    }

    function changeNumberOfPlayers() {
        let name = gameState.onePlayer === true ? player2Name : 'Darth Vader';
        dispatch({type:'changeNumberOfPlayers'});
        setPlayer2((oldName)=>name);
    }

    // Darth Vader's play logic ***************************************************************************************************************************
    if(gameState.onePlayer === true && gameState.playerOnMove === 2) { 
        let id = '-1'; 
        let suggestion = gameState.fieldsLeft.filter((element) => Tools.checkVictoryCondition(2,gameState.player1Moves, [...gameState.player2Moves, element]).win === true);
        if(suggestion.length !== 0) {id = suggestion[Tools.getRandomIndex(suggestion.length)]+''} 
        else {
            suggestion = gameState.fieldsLeft.filter((element) => Tools.checkVictoryCondition(1,[...gameState.player1Moves, element], gameState.player2Moves).win === true);
            if(suggestion.length !== 0) {id = suggestion[Tools.getRandomIndex(suggestion.length)]+''}
        }     
       
        if(id === '-1') {
            id = gameState.fieldsLeft[Tools.getRandomIndex(gameState.fieldsLeft.length)]+'';
        }
        let ev = {target:{id: id}};
        setTimeout(()=>gameEngine(ev), 1200);
    }
    //**************************************************************************************************************** */

    const clickHandler = (()=> {
        const callback = gameState.onePlayer === true && gameState.playerOnMove === 2 ? ()=>{} : gameEngine; 
        return callback;
    })();

    function gameEngine(ev) {
        let clickedFieldId = +ev.target.id
        let fieldsLeft = gameState.fieldsLeft;
        let clickedFields = gameState.clickedFields;
        let playerOnMove = gameState.playerOnMove;
        let player1Moves = gameState.player1Moves;
        let player2Moves = gameState.player2Moves;
        let player1Score = gameState.player1Score;
        let player2Score = gameState.player2Score;

        if(fieldsLeft.find((value)=> value === clickedFieldId) !== undefined) { 
            clickedFields.push(clickedFieldId);
            Tools.remove(clickedFieldId, fieldsLeft);
            if(playerOnMove === 1) {
                player1Moves.push(clickedFieldId);
            } else {
                player2Moves.push(clickedFieldId);
            }

            let winObj= {}; //obj returned from checkVictoryCondition function
            let draw = false;
            if(fieldsLeft.length <= 5) {
                winObj = Tools.checkVictoryCondition(playerOnMove, player1Moves, player2Moves);
            } 
            if(winObj.win === false && fieldsLeft.length === 0) {
                draw = true;
            }
            if(!winObj.win && !draw) {
                dispatch({type: 'nextMove', value: {
                    playerOnMove : playerOnMove % 2 +1,
                    clickedFields: clickedFields,
                    fieldsLeft: fieldsLeft,
                    player1Moves: player1Moves,
                    player2Moves: player2Moves
                }});
            } else if(winObj.win === true) {
                playerOnMove === 1 ? player1Score++ : player2Score++;
                dispatch({type: 'win', value: {
                    winner : playerOnMove === 1 ? player1Name : player2Name,
                    winFields: winObj.array,
                    player1Score: player1Score,
                    player2Score: player2Score
                }});
            } else if(draw === true) {
                dispatch({type:'draw'})
            } 
        }   
    }

    
    return <div id = {styles.wraper}>
                    
                     <div id={styles.mainContainer}>
                             <div id={styles.gameContainer}  ref = {overlay}>
                                <Context.Provider value = {
                                        {   
                                            game: gameState,
                                            player1Name : player1Name, 
                                            player2Name : player2Name, 
                                            changeName1 : setPlayer1, 
                                            changeName2 : setPlayer2, 
                                            newGame : newGame,
                                            resetScore: resetScore,
                                            changeNumberOfPlayers: changeNumberOfPlayers,
                                            overlayRef :overlay, 
                                        }
                }
            >
                <div id={styles.firstRow}>
                <div id={styles.firstColumn} >
                     <div id={styles.playground}>
                    <FieldsContainer clickHandler={clickHandler}/> 
                    </div>
                    <Players/>   
                </div>
                <ControlPanel/>
                </div>
                <GameNotifications/>  
            </Context.Provider>
            </div>
            <About/>  
            </div>
        </div>
   
}

export default App;