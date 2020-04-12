/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {List, Container, Header} from 'semantic-ui-react'
import FileListDropDown from "./FileSections/FileListDropDown";
import { connect } from "react-redux"
import * as actions from '../actions'
import PropTypes from "prop-types";


class FileListings extends React.Component {

    static propTypes = {
        activeGadget: PropTypes.string.isRequired
    };

    render() {
        const {
            activeGadget
        } = this.props;

        return (
            <div>
                <p></p>
                <Header as={"h3"} className="ui header">Tiedostot</Header>
                <Container textAlign='justified'> Nämä tiedostot on saatu useiden yksityisten käyttäjien toimesta pitkän
                    ajan kuluessa. Nämä näyttävät oikeilta päällisin puolin ... mutta ... En kuitenkaan pysty takaamaan esim
                    sähkökaavioiden tai muiden tiedostojen oikeellisuutta sekä turvallisuutta joten ymmärtänet sen että
                    käytät näitä tiedostoja omalla vastuulla. </Container>
                <p></p>
                <Container textAlign={"justified"}>Erittäin suuret kiitokset tiedostojen lähettäjille.</Container>
                <p> </p>
                <FileListDropDown/>
                <p> </p>
                <p> Device : </p>
                <List id={"fileList"}> </List>
            </div>
        )
    }
}

const gadgetList = state => {
    const activeGadget = state.gadgetSelectionControls.activeGadgetDevice;
    return {
        activeGadget,
    }
};

export default connect(gadgetList, actions)(FileListings);