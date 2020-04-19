/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header} from "semantic-ui-react";
import {Manufactures} from "./Manufacturers/Manufactures";

const Manufacturers = () => <div>
    <Header style={{marginTop: "2em"}} as={"h3"}>Valmistajat</Header>
    <Manufactures/>
</div>

export default Manufacturers