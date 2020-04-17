/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import gadgetList from '../../data/gadget_dropdown_data';

class FileListDropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectGadget: 'Parma 10',
            options: gadgetList
        }
        this.handleUserSelection = this.handleUserSelection.bind(this);
    }

    handleUserSelection = (e, data) => {
        this.setState({
                selectGadget: data.value
            }
        )
        this.props.onSelectGadgetDevice(data.value);
    }


    render() {

        return (
            <Dropdown
                placeholder='Valitse laite'
                fluid
                selection
                options={this.state.options}
                defaultValue={this.state.selectGadget} // <== here the default values
                onChange={(e, data) => {
                    this.handleUserSelection(e,data)
                }}
            >

            </Dropdown>
        )
    }
}

export default (FileListDropDown);
