/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Container, Header} from "semantic-ui-react";
import {Link} from "./Link";

export const HLHeat = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> HLHeat Oy </Header>
    <Container>
        Tarjoaa
        vaihtoehtoa olemassaoleviin sekä uusiin ilmalämmityskohteisiin.
        Ilmalämmityspaketin 'High Light Smart System'.
        <br/>
        Laitteistona Energiset-ilmalämmityskoje.(Valmistajana Upo?) Yritys
        toimii Lahden
        seudulla.
        Vesilämpöpatteriston lämmitys voidaan hoitaa sekä sähköllä että
        vedellä.
    </Container>
    <Link url={"https://hl-heat.fi/"} text={'https://hl-heat.fi/'}/>
</div>
