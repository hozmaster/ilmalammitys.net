/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */
import React from "react";
import {Container, Header} from "semantic-ui-react";
import {HttpLink} from "../../Components/HttpLink";

export const Oltik = () => <div>
    <Header style={{marginTop: "2em"}} as={'h4'}> Oltik Oy </Header>
    <Container>
        Tarjoaa ilmalämmityslaitteiden saneerauspalveluita koko maan alueella.
        Etupäässä mm Upovarin, Haatovarin, Upokalorin, Haatokalorin sekä
        muiden ilmalämmityslaitteiden modernisoinnit, korjaamiset ja tarjoaa varaosia.
        Toimialueena on koko Suomi.<br/>
    </Container>
    <HttpLink text={'https://www.oltik.fi/'} url={'https://www.oltik.fi/'}/>
</div>
