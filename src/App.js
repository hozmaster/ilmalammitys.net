
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Home from "./Pages/Home";
import TechnicInfo from "./Pages/Technic";
import FileListings from "./Pages/FileListings"
import Manufacturers from "./Pages/Manufacturers";
import Feedback from "./Pages/Feedback";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router >
            <div className="App">
                <div className="ui raised very padded text container">
                    <div className="ui five item menu">
                        <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>{' '}
                        <NavLink exact to="/tekniikka" activeClassName="active" className="item">Tekniikka</NavLink>{' '}
                        <NavLink exact to={'/tiedostot'} activeClassName="active" className="item">Tiedostot</NavLink>{' '}
                        <NavLink exact to={'/valmistajat'} activeClassName="active" className="item">Valmistajat</NavLink>{' '}
                        <NavLink exact to={'/palaute'} activeClassName="active" className="item">Palaute</NavLink>{' '}
                    </div>
                    <p> </p>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path='/tekniikka'  component={TechnicInfo}/>
                        <Route path='/tiedostot' component={FileListings}/>
                        <Route path='/valmistajat' component={Manufacturers}/>
                        <Route path='/palaute' component={Feedback}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
