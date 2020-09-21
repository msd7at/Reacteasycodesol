import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch ,Redirect} from "react-router-dom";
import Seva from "./Seva";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/seva"  component={Seva} />
            <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
    );
}
export default App;