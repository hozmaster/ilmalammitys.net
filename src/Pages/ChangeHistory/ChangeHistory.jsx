/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Popup} from "semantic-ui-react";

const history = [
    {
        version: '1.10',
        reason: 'Lisätty Lämpösampö LS-4000',
        date: '15.10.2020'
    }
]

const the_link = "https://github.com/hozmaster/ilmalammitys.net"

const ChangeHistory = () => (
    <>
        Versio : 
        <Popup
            content={history[0].reason}
            key={history[0].version}
            header={history[0].date}
            trigger={  <a href={ the_link } > {history[0].version} </a>
            }
        />
    </>
)

export default ChangeHistory