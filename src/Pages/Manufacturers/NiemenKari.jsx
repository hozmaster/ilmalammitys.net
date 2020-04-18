/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */


import React from "react";
import {Container, Header} from "semantic-ui-react";
import {Link} from "./Link";

export const NiemenKari = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> Niemen Kari Oy</Header>
    <Container>Ilmalämmityskone Lämpö-Iiwari. Käytännössä Lämpö Iiwari on täysin saneerauskohteisiin tarkoitettu
        laitteisto
        kaikkien vanhojen mallien tilalle. Lämmityspatteri toimii vedellä.
        Valmistetaan Suomessa.
        <Link url={'https://www.niemi-kari.fi'} text={'https://www.niemi-kari.fi'}/>
    </Container>
</div>
