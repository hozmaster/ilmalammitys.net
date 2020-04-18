/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";

export const Link = ({text, url}) => <div>
    <p style={{marginTop: "1em"}}> Linkki:
        <a style={{marginLeft: "5px"}} href={url}>
            {text}
        </a>
    </p>
</div>