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
        <div className="masthead error segment">
            <div className={"container"}>
                <h1 className="ui dividing header">
                    No match for <code>{location.pathname}</code>
                </h1>
                <p>Rewind and try another one</p>
            </div>
        </div>
    )
}

export default NoMatch

