import React from 'react';

import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <div className="ui three item menu">
                    <a className="active item">Editorials</a>
                    <a className="item">Reviews</a>
                    <a className="item">Upcoming Events</a>
                </div>
                <Home/>
            </div>
        </div>
    );
}

export default App;
