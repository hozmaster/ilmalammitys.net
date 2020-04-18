/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header} from "semantic-ui-react";
import LinkListings from "./Links/LinkListings";
import FeedBacks from "./Feedbacks/Feedbacks";

const Other = () => <div>
    <LinkListings/>
    <Header as={"h3"}>Palaute</Header>
    <FeedBacks/>
</div>
export default Other