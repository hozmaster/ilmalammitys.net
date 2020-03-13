/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import { List, Container } from 'semantic-ui-react'

const FileListings = () => <div>
    <p> </p>
    <h3 className="ui header">Tiedostot</h3>
    <Container textAlign='justified'> Nämä tiedostot on saatu useiden yksityisten käyttäjien toimesta pitkän ajan kuluessa. Nämä näyttävät oikeilta päällisin puolin ... mutta ... En kuitenkaan pysty takaamaan esim sähkökaavioiden tai muiden tiedostojen oikeellisuutta sekä turvallisuutta joten ymmärtänet sen että käytät näitä tiedostoja omalla vastuulla.  </Container>
    <p> </p>
    <Container textAlign={"justified"}>Erittäin suuret kiitokset tiedostojen lähettäjille.</Container>
    <List link>
        <List.Item active> Parma 10</List.Item>
        <List.Item as='a'>About</List.Item>
    </List>
</div>
export default FileListings