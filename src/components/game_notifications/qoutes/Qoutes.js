import React from 'react';
import styles from './Qoutes.module.css';
import Tools from '../../../tools/tools'

function Qoutes() {
    
    
    let classesYoda = React.useRef(styles.qoutesYoda);
    let classesVader = React.useRef(styles.qoutesVader);

    function reducer(oldState, action) {
        let newState = {...oldState};
        switch(action.type) {
            case 'downloaded' : newState.yodaQoutes = action.value.yodaQoutes;
                                newState.darthVaderQoutes = action.value.darthVaderQoutes;
                                
            break;
            case 'unhide' : 
                            
                            if(action.value === 0) {
                               newState.qoute =  oldState.yodaQoutes[Tools.getRandomIndex(oldState.yodaQoutes.length)];
                               classesYoda.current = styles.qoutesYoda + ' '+styles.transition1;
                            } else {
                                newState.qoute =oldState.darthVaderQoutes[Tools.getRandomIndex(oldState.darthVaderQoutes.length)];
                                classesVader.current = styles.qoutesVader + ' '+styles.transition1;
                            }
                            newState.showQoute= true;

            break;
            case 'hide': 
                         newState.showQoute = false;
                         if(action.value === 1) {classesYoda.current = styles.qoutesYoda +' '+ styles.transition2;} else
                        {classesVader.current = styles.qoutesVader +' '+ styles.transition2;}
            break;
            default:;
        }
        return newState;
    }
    const [starWars, dispatch] = React.useReducer(reducer, {yodaQoutes: [], darthVaderQoutes: [], qoute: '', showQoute: false}); 
    
    React.useEffect(() => {
        fetch('https://api.npoint.io/323247e95bd7f7971409')
        .then((response) => response.json() )
        .then((data) => dispatch({type:'downloaded', value: data.starWars}))
        .catch(()=>{});
        let i = 0;
        let interval = setInterval(() => {
            i = i % 4;
            if(i===1 || i===3) {
                dispatch({type:'hide', value: i});
            } else {
                dispatch({type:'unhide', value:i})
            }
            i++;  
        }, 10000);
        return ()=>clearInterval(interval);
    }, []);


    return <>
            <div className ={styles.mainContainer}>
            <div className = {classesYoda.current}>
                                        {starWars.qoute}  
                                   </div>
            <div className ={classesVader.current}>{starWars.qoute}</div>
            </div>
    </>
}

export default Qoutes;