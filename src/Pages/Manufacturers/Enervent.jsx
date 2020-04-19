/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */
import React from "react";
import {Container, Header} from "semantic-ui-react";
import {HttpLink} from "../../Components/HttpLink";

export const Enervent = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> Enervent Oy</Header>
    <Container textAlign={"justified"}>
        Tarjoaa etupäässä Valmet Kotilämmön
        saneeraus kohteisiin Enervent Pingvin Kotilämpö-laitetta eri
        lämmityspatteri vaihtoehdoilla. Tarjoaa mahdollisuuden sovittaa
        Freeway-etähallinta järjestelmää laitteistoon.
        <HttpLink url={"https://www.enervent.fi"} text={"https://www.enervent.fi"}/>
    </Container>
</div>


