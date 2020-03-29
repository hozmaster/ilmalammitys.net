
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
<<<<<<< Updated upstream
    Link
} from 'react-router-dom'
=======
    Link,
    NavLink,
} from "react-router-dom";
>>>>>>> Stashed changes

import Home from "./Pages/Home";
import Technic from "./Pages/Technic";
import Fileslistings from "./Pages/Fileslistings"


function App() {
    return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container">
                    <div className="ui five item menu">
                        <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>{' '}
                        <NavLink exact to="/tekniikka" activeClassName="active" className="item">Tekniikka</NavLink>{' '}
                        <NavLink exact to={'/tiedostot'} activeClassName="active" className="item">Tiedostot</NavLink>{' '}
                        <NavLink exact to={'/valmistajat'} activeClassName="active" className="item">Valmistajat</NavLink>{' '}
                        <NavLink exact to={'/palaute'} activeClassName="active" className="item">Palaute</NavLink>{' '}
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
