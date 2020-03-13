
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from "./Pages/Home";
import Technic from "./Pages/Technic";
import Fileslistings from "./Pages/Fileslistings"
import Manufacturing from "./Pages/Manufacturing";
import Feedback from "./Pages/Feedback";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container">
                    <div className="ui five item menu">
                        <a href={"/"}className="active item">Home</a>
                        <a href={'/tekniikka'} className="item">Tekniikka</a>
                        <a href={'/tiedostot'} className="item">Tiedostot</a>
                        <a href={'/valmistajat'} className="item">Valmistajat</a>
                        <a href={'/palaute'} className="item">Palaute</a>
                    </div>
                    <p> </p>
                    <Route exact path='/' component={Home}/>
                    <Route path='/tekniikka' component={Technic}/>
                    <Route path='/tiedostot' component={Fileslistings}/>
                    <Route path='/valmistajat' component={Manufacturing}/>
                    <Route path='/palaute' component={Feedback}/>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
