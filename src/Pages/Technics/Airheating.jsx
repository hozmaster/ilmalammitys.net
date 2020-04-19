/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */


import {Container, Header} from "semantic-ui-react";
import React from "react";

export const Airheating = () => <div>

    <Header style={{marginTop: "2em"}} as={"h3"}> Ilmalämmityskone </Header>

    <Container textAlign={"justified"}>Lämminilmakone jakaantuu tyypillisesti karkeasti ottaen kolmeen osaan: Lämpimän
        ilman
        talteenotto (LTO), puhaltimiin ja itse lämpimän ilman välittämiseen
        suunniteltuun puhaltimeen sekä kennostoon.</Container>

    <Header as={"h4"}>Puhaltimet:</Header>

    <Container textAlign={"justified"}>Laitteessa on siis ainakin kolme erilaista puhallinta: poistoilmanpuhallin,
        raitisilmapuhallin ja varsinainen
        lämminilmanpuhallin joka puhaltaa lämmitettävän ilman lämmityspatteriston lävitse talon
        ilmakanavavistoon.</Container>

    <Header as={"h4"}>Raitisilmapuhallin</Header>

    <Container textAlign={"justified"}>Raitisilmapuhallin sijaitsee siis LTO kennon alapuolella laitteiston ovesta
        katsottuna vasemmalla. Tämä
        puhallin
        on selvästi pienempi kuin poistoilmapuhallin, ja tarvitsee 2mikroF kondesaattorin (siis Vallox:in mukaan,
        ainakaan meillä ei kondensaattoria asennettu). Käynnistyy yhtäaikasesti poistoilmapuhaltimen kanssa.</Container>

    <Header as={"h4"}> Poistopuhallin </Header>

    <Container textAlign={"justified"}>Poistoilmapuhallin sijaitsee TO kennostosta katsottuna oikealla
        puolella.</Container>

    <Container textAlign={"justified"}>Puhaltimesta käy Ebmpast, mallinumero D2E 133-AM47-01. Puhaltimen mukana pitäisi
        tulla 3mikroF
        kondesaattori
        (jota itse asiassa ei asenneta vaan se jää hyllyn koristeeksi.) Asennus mielellään osaavan LVI asentajan
        toimesta, kätisyys voidaan muuttaa laitteelle sopivaksi. Kysy Vallox:ilta taikka LVI myymälästä.</Container>

    <Header as={"h4"}> Lämminilmapuhallin </Header>

    <Container textAlign={"justified"}> Lämminilmapuhallin sijaitsee koneiston alaosassa, lämmityspatteriston
        yläpuolellla.</Container>

    <Header as={"h4"}> Lämpimän ilman siirto </Header>

    <Container textAlign={"justified"}> Lämmin ilma tuodaan taloon ilmakanavia pitkin jotka on upotettu
        yksikerroksisessa talossa sokkeliin
        valun
        yhteydessä. Nämä ilmakanavat tulisi puhdistaa ainakin kerran 15 vuodessa asiaan erikoistuneen huoltoliikkeen
        toimesta. Jotkut nuohoojat tarjoavat myöskin kanaviston puhdistuspalveluita joten kannattaa kysellä hintoja sekä
        mahdollisuutta putkiston puhdistuksiin myöskin alueesi nuohoojilta.</Container>

    <Header as={"h4"}> Käytetty ilma </Header>
    <Container textAlign={"justified"}> Käytetty ilma poistetaan talosta tai huoneiston harmaiden tilojen kautta
        takaisin ilmalämmityskoneeseen
        joka ottaa parhaansa mukaan lämmön talteen ja esilämmittää mahdollisuuksiensa mukaan raaka-ilman.</Container>
    <Header as={"h3"}> Huolto </Header>
    <Container textAlign={"justified"}> Laitteiston huolto kannattaaa hoitaa kesällä jolloin lämmityksen tarve on
        väihäisintä. Karkeasti voidaan sanoa että erikoisfirmojen palveluita voidaan käyttää ympäri vuoden ja nuohoojien
        palveluita
        kesäaikaan.</Container>

</div>