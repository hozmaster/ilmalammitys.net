/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {Header} from "semantic-ui-react";
import React from "react";

import theLinks from '../../data/other_links';

const LinkListings = () => <div>
    <Header style={{marginTop: "2em"}} as={"h3"}> Linkit </Header>
    <div>
        {Object.values(theLinks.map(
            ({text, url, key}) => {
                return (
                    <div key={key}>
                        <a href={url}>
                            {text}
                        </a>
                    </div>
                )
            }))}
    </div>
</div>
export default LinkListings
