/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header} from "semantic-ui-react";

const Technic = () => <div>

    <p></p>
    <Header style={{marginTop: "2em"}} as={"h3"}> Lämmönjakeskus </Header>

    <p>Varsinaisen lämmityksen lisäksi tarvitaan siis lämmönjakokeskus joka huolehtii lämpimän veden lämmityksestä ja
        joka välittää kulloinkin ajankohtaan sopivan määrän kaukolämpöä ilmalämmityslaitteen vesipatteristoon. Suomessa
        lämmönjakokeskus laitteiden valmistajia on jonkun verran markkinoilla. Ilmalämmistystaloissa jotka on liitetty
        kaukolämpöverkostoon, lämmönjakokeskuksen tyyppi tulisi olla vähintään ns. 2-piirinen. </p>
    <p>Tällöin lämmönsääätöä voidaan tehdä erikseen lämpimälle vedelle ilman että se häiritsee varsinaista huoneiston
        lämmitystä.</p>

    <Header as={"h4"}> Ilmalämmityskone </Header>

    <p>Lämminilmakone jakaantuu karkeasti ottaen kolmeen osaan: LTO, puhaltimiin ja itse lämpimän ilman välittämiseen
        suunniteltuun puhaltimeen sekä kennostoon.</p>

    <Header as={"h5"}>Puhaltimet:</Header>

    <p>Laitteessa on siis ainakin kolme erilaista puhallinta: poistoilmanpuhallin, raitisilmapuhallin ja varsinainen
        lämminilmanpuhallin joka puhaltaa lämmitettävän ilman lämmityspatteriston lävitse talon ilmakanavavistoon.</p>

    <Header as={"h5"}>Raitisilmapuhallin</Header>

    <p>Raitisilmapuhallin sijaitsee siis LTO kennon alapuolella laitteiston ovesta katsottuna vasemmalla. Tämä puhallin
        on selvästi pienempi kuin poistoilmapuhallin, ja tarvitsee 2mikroF kondesaattorin (siis Vallox:in mukaan,
        ainakaan meillä ei kodensaattoria asennettu). Käynnistyy yhtäaikasesti poistoilmapuhaltimen kanssa.</p>

    <Header as={"h5"}> Poistopuhallin </Header>

    <p>Poistoilmapuhallin sijaitsee TO kennostosta katsottuna oikealla puolella.</p>

    <p>Puhaltimesta käy Ebmpast, mallinumero D2E 133-AM47-01. Puhaltimen mukana pitäisi tulla 3mikroF kondesaattori
        (jota itse asiassa ei asenneta vaan se jää hyllyn koristeeksi.) Asennus mielellään osaavan LVI asentajan
        toimesta, kätisyys voidaan muuttaa laitteelle sopivaksi. Kysy Vallox:ilta taikka LVI myymälästä.</p>

    <Header as={"h5"}> Lämminilmapuhallin </Header>

    <p> Lämminilmapuhallin sijaitsee koneiston alaosassa, lämmityspatteriston yläpuolellla.</p>

    <Header as={"h4"}> Lämpimän ilman siirto </Header>

    <p> Lämmin ilma tuodaan taloon ilmakanavia pitkin jotka on upotettu yksikerroksisessa talossa sokkeliin valun
        yhteydessä. Nämä ilmakanavat tulisi puhdistaa ainakin kerran 15 vuodessa asiaan erikoistuneen huoltoliikkeen
        toimesta. Jotkut nuohoojat tarjoavat myöskin kanaviston puhdistuspalveluita joten kannattaa kysellä hintoja sekä
        mahdollisuutta putkiston puhdistuksiin myöskin alueesi nuohoojilta.</p>

    <Header as={"h4"}> Käytetty ilma </Header>
    <p> Käytetty ilma poistetaan talosta tai huoneiston harmaiden tilojen kautta takaisin ilmalämmityskoneeseen joka
        ottaa parhaansa mukaan lämmön talteen ja esilämmittää mahdollisuuksiensa mukaan raaka-ilman.</p>
    <Header as={"h3"}> Huolto </Header>
    <p> Karkeasti voidaan sanoa että erikoisfirmojen palveluita voidaan käyttää ympäri vuoden ja nuohoojien palveluita
        kesäaikaan.</p>

    <Header as={"h4"}> </Header>
</div>;

export default Technic