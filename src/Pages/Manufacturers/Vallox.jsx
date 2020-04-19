/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Container, Header} from "semantic-ui-react";
import {HttpLink} from "../../Components/HttpLink";

export const Vallox = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> Vallox Oy</Header>
    <Container textAlign={"justified"}>
        Valmet-ilmanlämmistyskoneiden valmistus lopettu joskus 1980-luvun puolenvälin tietämillä. Varaosia myy
        nykyään Vallox Oy joka erotettiin Valmet yhtiöstä MBO-kaupalla. Tällä hetkellä Vallox myy ilmalämmityslaite
        Vallox Aito Kotilämpö-nimistä tuotetta etupäässä saneeraus kohteisiin. 
    </Container>
    <HttpLink url={'https://www.vallox.com'} text={'https://www.vallox.com'}/>
</div>