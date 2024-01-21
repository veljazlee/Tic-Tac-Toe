import React from 'react';
import styles from './About.module.css';
import AboutMe from './about_me/AboutMe';
import AboutGame from  './about_game/AboutGame';
import Menu from './menu/Menu';


function About(props) {

    
    function reducer(state, action) {
        let newState = {...state};
        switch(action.type) {
            case 'downloaded' : newState.text = action.value;
                                newState.downloaded = true;
                                
            break;
            case 'aboutMe' : newState.aboutMe = true;
            break;
            case 'aboutGame' : newState.aboutMe = false;
            break;
            default:;
        }
        return newState;
    }

    const [data, dispatch] = React.useReducer(reducer, {text : '', downloaded: false, aboutMe: true})



    React.useEffect(() => {
        fetch('https://api.npoint.io/588d620b74be9add8f81')
        .then((response) => response.json())
        .then((data) => dispatch({type: 'downloaded', value:data}))
        .catch(() => {});
        
    }, []);

    function tabClickHandler(ev) {
            if(ev.target.id === '1') {
                dispatch({type: 'aboutMe'});
            } else if (ev.target.id === '2') {
                dispatch({type: 'aboutGame'})
            }
    }
    
    return <div id={styles.aboutContainer}>
                 <Menu  aboutMe = {data.aboutMe} handler = {tabClickHandler}/>
                 <div id={styles.about}>
                    {(data.downloaded && data.aboutMe) && <AboutMe text = {data.text.aboutMe}/>}
                    {data.aboutMe === false && <AboutGame text = {data.text.aboutGame}/>}
                </div>
    </div>
}

export default About;