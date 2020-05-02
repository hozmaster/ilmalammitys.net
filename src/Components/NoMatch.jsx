/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {
    useLocation
} from "react-router-dom";


const NoMatch = () => {
    let location = useLocation();
    return (
        <div style={{marginTop: "2em"}} className="masthead error segment centered" >
            <div className={"container"} >
                <h1 className="ui dividing header center aligned">
                    No match for <code>{location.pathname}</code>
                    <p style={{marginBottom: "1em"}}>  </p>
                </h1>
            </div>
        </div>
    )
}

export default NoMatch

