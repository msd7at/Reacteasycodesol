import React from "react";
import web from "../src/images/img2.jpg";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common  name="welcome to about page" 
            src={web} 
            visit="/contact" 
            btn_name="contact now"
            imgsrc={web}
             />
        </>
    );
}
export default About;