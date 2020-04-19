/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";
import {Container, Header} from "semantic-ui-react";
import {HttpLink} from "../../Components/HttpLink";

export const Vallox = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> Vallox Oy</Header>
    <Container>̈́
        Ilmanlämmistyskoneiden
        valmistus lopettu joskus 1980-luvun
        puolenvälin tietämillä. Varaosia myy
        nykyään Vallox Oy. Vallox
        Oy:llä on ollut
        suunnitelmia uuden tuotteen lanseeraamisesta markinoille, mutta
        tällä hetkellä Vallox Oy ei ole markkinoilla
        ilmalämmityskoneita. Varaosia olemassaoleviin Valmet
        kotilämpö laitteistohin kannattaa
        kysyä Vallox Oy:ltä.
    </Container>
    <HttpLink url={'https://www.vallox.com'} text={'https://www.vallox.com'}/>
</div>