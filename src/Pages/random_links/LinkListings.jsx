/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {List, Header} from "semantic-ui-react";
import React from "react";

import theLinks from '../../data/random_links';

const LinkListings = () => <div>
    <Header style={{marginTop: "2em"}} as={"h2"}> Linkit </Header>
    <div>
        {Object.values(theLinks.map(
            ({text, url}) => {
                return (
                    <div>
                        <a href={url}>
                            {text}
                        </a>
                    </div>
                )
            }))}
    </div>
</div>
export default LinkListings
