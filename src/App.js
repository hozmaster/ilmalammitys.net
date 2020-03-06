
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from "./Pages/Home";
import Technic from "./Pages/Technic";
import Fileslistings from "./Pages/Fileslistings"
import Feedback from "./Pages/Feedback";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container segment">
                    <div className="ui five item menu">
                        <a href={"/"}className="active item">Home</a>
                        <a href={'/tekniikka'} className="item">Tekniikka</a>
                        <a href={'/tiedostot'} className="item">Tiedostot</a>
                        <a href={'/tiedostot'} className="item">Tiedostot</a>
                        <a href={'/palaute'} className="item">Palaute</a>
                    </div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/tekniikka' component={Technic}/>
                    <Route path='/tiedostot' component={Fileslistings}/>
                    <Route path='/palaute' component={Feedback}/>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
