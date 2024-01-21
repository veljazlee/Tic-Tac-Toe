import Header from '../header/Header';
import Description from '../description/Description';
import myImage from './starwars.png';
import Contact from '../contact/Contact';

function AboutGame(props) {
    return <>
            <Header text = {props.text.personalInfo} myImage = {myImage}/>
            <Description text = {props.text.description}/>
            <Contact text = {props.text.contact}/>
    </>
}
 export default AboutGame;