import React from "react";
import Common from "./Common";
import web from "../src/images/img2.jpg";
const Home = () => {
    return (
        <>
            <Common name="Grow your Business with" 
            src={web} 
            visit="/seva" 
            btn_name="Get Started" />
        </>
    );
}
export default Home;