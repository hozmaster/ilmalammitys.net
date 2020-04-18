/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Container, Header} from 'semantic-ui-react'
import FileListDropDown from "./Downloads/FileListDropDown";
import FileListTable from "./Downloads/FileListTable"
import {connect} from "react-redux"
import * as actions from '../actions'

class Downloads extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectGadget: 'HomeAir',
        }

        this.selectGadgetDevice = this.selectGadgetDevice.bind(this);
    }

    render() {
        return (
            <div>
                <Header style={{marginTop: "2em"}} as={"h3"} className="ui header">Tiedostot</Header>
                <Container textAlign='justified'> Nämä tiedostot on saatu useiden yksityisten käyttäjien toimesta pitkän
                    ajan kuluessa. Nämä näyttävät oikeilta päällisin puolin ... mutta ... En kuitenkaan pysty takaamaan
                    esim
                    sähkökaavioiden tai muiden tiedostojen oikeellisuutta sekä turvallisuutta joten ymmärtänet sen että
                    käytät näitä tiedostoja omalla vastuulla. </Container>
                <p></p>
                <Container textAlign={"justified"}>Erittäin suuret kiitokset tiedostojen lähettäjille.</Container>
                <p></p>
                <FileListDropDown onSelectGadgetDevice={this.selectGadgetDevice}/>
                <p></p>
                <FileListTable selectGadget={this.state.selectGadget}/>
            </div>
        )
    }

    selectGadgetDevice = (gadget) => {
        this.setState({
            selectGadget: gadget
        })
    }
}

const gadgetList = state => {
    const activeGadget = state.gadgetSelectionControls.activeGadgetDevice;
    return {
        activeGadget,
    }

};

export default connect(gadgetList, actions)(Downloads);