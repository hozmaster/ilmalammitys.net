
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'

import Home from "./Pages/Home";
import Technic from "./Pages/Technic";
import FileListings from "./Pages/Filelistings"
import Manufacturing from "./Pages/Manufacturing";
import Feedback from "./Pages/Feedback";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="ui raised very padded text container">
                    <div className="ui five item menu">
                        <Link to="/" className="active item">Home</Link>{' '}
                        <Link to="/tekniikka" className="item">Tekniikka</Link>{' '}
                        <Link to={'/tiedostot'} className="item">Tiedostot</Link>{' '}
                        <Link to={'/valmistajat'} className="item">Valmistajat</Link>{' '}
                        <Link to={'/palaute'} className="item">Palaute</Link>{' '}
                    </div>
                    <p> </p>
                    <Switch>
                        <Route path="/"> </Home>
                        <Route path='/tekniikka' component={Technic}/>
                        <Route path='/tiedostot' component={FileListings}/>
                        <Route path='/valmistajat' component={Manufacturing}/>
                        <Route path='/palaute' component={Feedback}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
