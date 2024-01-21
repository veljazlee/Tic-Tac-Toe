
import Description from '../description/Description';
import Contact from '../contact/Contact';
import Header from '../header/Header'; 
import myImage from './ja.jpg';

function AboutMe(props) {
    
    return <>
            <Header text = {props.text.personalInfo} myImage = {myImage}/>
            <Description text = {props.text.description}/>
            <Contact text = {props.text.contact}/>
    </>
}

export default AboutMe;