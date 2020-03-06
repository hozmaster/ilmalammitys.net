
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from "./Pages/Home";
import Technic from "./Pages/Technic";
import Fileslistings from "./Pages/Fileslistings"


function App() {
    return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container segment">
                    <div className="ui three item menu">
                        <a href={"/"}className="active item">Home</a>
                        <a href={'/tekniikka'} className="item">Tekniikka</a>
                        <a href={'/tiedostot'} className="item">Tiedostot</a>
                    </div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/tekniikka' component={Technic}/>
                    <Route path='/tiedostot' component={Fileslistings}/>
                </div>
            </div>

        </Router>
    );
}

export default App;
