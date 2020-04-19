
import React from 'react';
import {isIE} from 'react-device-detect';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Home from "./Pages/Home";
import TechnicInfo from "./Pages/Technic";
import FileListings from "./Pages/Downloads"
import Manufacturers from "./Pages/Manufacturers";
import Other from "./Pages/Other";
import Footer from "./Components/Footer";


class App extends React.Component {
    render() {
        if (isIE) return <div> IE is not supported. Download Chrome/Opera/Firefox </div>
        return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container">
                    <div className="ui five item menu">
                        <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>{' '}
                        <NavLink exact to="/tekniikka" activeClassName="active"
                                 className="item">Tekniikka</NavLink>{' '}
                        <NavLink exact to={'/tiedostot'} activeClassName="active"
                                 className="item">Tiedostot</NavLink>{' '}
                        <NavLink exact to={'/valmistajat'} activeClassName="active"
                                 className="item">Valmistajat</NavLink>{' '}
                        <NavLink exact to={'/yleista'} activeClassName="active" className="item">Yleistä</NavLink>{' '}
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path='/tekniikka' component={TechnicInfo}/>
                        <Route path='/tiedostot' component={FileListings}/>
                        <Route path='/valmistajat' component={Manufacturers}/>
                        <Route path='/yleista' component={Other}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </Router>
        )
    }
}

export default App;
