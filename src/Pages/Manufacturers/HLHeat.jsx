/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Container, Header} from "semantic-ui-react";
import {HttpLink} from "../../Components/HttpLink";

export const HLHeat = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> HLHeat Oy </Header>
    <Container textAlign={"justified"}>
        Tarjoaa vaihtoehtoa olemassaoleviin sekä uusiin ilmalämmityskohteisiin ilmalämmityspakettia 'High Light Smart
        System'. Laitteistona oma Energiset-ilmalämmityskoje.(Valmistajana Upo?). Yritys
        toimii Lahden seudulla. Vesilämpöpatteriston lämmitys voidaan hoitaa
        sekä sähköllä että vedellä.
    </Container>
    <HttpLink url={"https://hl-heat.fi/"} text={'https://hl-heat.fi/'}/>
</div>
