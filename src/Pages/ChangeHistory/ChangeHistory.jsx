/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Popup,Label} from "semantic-ui-react";

const history = [
    {
        version: '1.10',
        reason: 'Lisätty Lämpösampö LS-4000 ilmälämmityslaitteiston pdf tiedostot',
        date: '15.10.2020'
    }
]

const ChangeHistory = () => (
    <>
        <Popup
            content={history[0].reason}
            key={history[0].date}
            header={history[0].version}
            trigger={  <Label as='a'>
                Versio 1.10</Label>
            }
        />
    </>
)

export default ChangeHistory