/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

// https://medium.com/@wley3337/controlled-dropdown-selection-with-react-redux-and-semantic-ui-react-6a3b2b158659
import React from 'react'
import {Dropdown} from 'semantic-ui-react'

import gadgetList from '../../data/gadget_data';

import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
    changeActiveGadgetDevice
} from '../../actions/index'

class FileListDropDown extends React.Component {
    // static propTypes = {
    //     activeGadget: PropTypes.string.isRequired,
    // };

    constructor(props) {
        super(props);
        this.state = {
            selectGadget: '',
            data: {
                name: '',
                subject: ''
            }
        }
    }

    setCurrentSelectedValues = (e, data ) => {

    };
                                             
    render() {
        return (
            <Dropdown
                placeholder='Valitse laite'
                fluid
                selection
                options={gadgetList}
                onChange={(e, data) =>{this.setCurrentSelectedValues(e, data)}}
                // onChange={this.handleChange}
            >

            </Dropdown>
        )
    }
}

const controlStateToProps = state => {
    const activeGadget = state.gadgetSelectionControls.activeGadgetDevice;
    return {
        activeGadget,
    }
};

export default FileListDropDown;
// export default connect(controlStateToProps)(FileListDropDown);
