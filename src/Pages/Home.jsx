/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Container, Header} from "semantic-ui-react";

const Home = () => <div>
    <p></p>

    <Header as={'h3'}>Ilmalämmitys lyhyesti </Header>
    <Container textAlign={"justified"}>Ilmalämmityksessä huoneisto lämmitetään lämpimän ilman avulla. Lämmitetty ilma
        tuodaan huoneisiin ilmakanavia pitkin huoneisiin. Ilmakanavat sijaitsevat lattiassa sokkelissa taikka talon
        rakenteissa. Ilma jaetaan huoneistoihin lattian rajassa olevien ritilöiden avulla.</Container>
    <p></p>
    <Container textAlign={"justified"}>Tällä sivuilla keskitytään siihen mitä laitteita ja eri osa-alueita tarvitaan
        lämmityksen ja lämpimän veden tuottamiseen tavallisessa omakotitalossa joka on liitetty kaukolämpöverkkoon sekä
        jonka lämmitys hoidetaan ilmalämmityksen avulla. </Container>
    <p></p>
    <Container textAlign={"justified"}>Aika on rajallinen määre joka pysyy samana ja on minulla täyteen ahdettu. Siksi
        en tarjoa apua taikka tukea puhelimitse. Toki vastaan sähköpostiin kun ehdin. </Container>


    <Header as={'h4'}>Yleistä </Header>

    <Container textAlign={"justified"}>Ilmalämmitys on oikein suunniteltuna riittävä lämmityksen lähde
        normaalikokoisille omakotitalolle Suomessa (oman kokemuksen mukaan). Joskus olemme lämmittäneet talossamme
        olevaa leivinuunia esimerkiksi kovilla pakkasilla.</Container>
    <p></p>
    <Container textAlign={"justified"}>80-luvun valmistetut laitteistot ovat pian käyttöiän päässä, joten näiden
        laitteistojen uusiminen/saneeraaminen on ajankohtainen tällä hetkellä. Varaosia ainakin Valmetin
        Kotilämpölaitteistoon on saatavilla nopeastikin.</Container>
    <p></p>
    <Container textAlign={"justified"}>Tällä hetkellä markkinoilla on muutamia valmistajia jotka valmistavat laitteita
        yksityissektorille. Nämä laitteistot on tarkoitetu lähinnä saneerauskohteisiin mutta esteitä uudisrakentamisen
        ei pitäisi olla. Iilmälämmitysmarkkinointi ja laitteiden valmistus on suunnattu tällä hetkellä
        yrityskiinteistöihin kuten puutarhatilojen lämmitykseen sekä julkisiin rakennuksiin.</Container>

    <Header as={'h4'}>Muuta</Header>
    <Container textAlign={"justified"}>Jos sinulla on olemassa jokin ilmalämmityslaitteisto jota ei ole tällä sivustolla
        mainittu, ota yhteyttä joko sähköpostin taikka Issues-toimminnon kautta. Samalla esitteistä kaaviokuvia taikka
        teknisiä tietoja kuten sähkö-ja puhallustietoja
        koskien ilmalämmitysklaitteistoja niin otan mielellään vastaan ja laitan ne sitten tälle
        sivustolle. </Container>


</div>;
export default Home

