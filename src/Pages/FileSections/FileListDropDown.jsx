/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

// https://medium.com/@wley3337/controlled-dropdown-selection-with-react-redux-and-semantic-ui-react-6a3b2b158659
import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import gadgetList from '../../data/gadget_data';

import PropTypes from "prop-types"
import { connect } from "react-redux"

import * as actions from '../../actions'

class FileListDropDown extends React.Component {
    static propTypes = {
        changeActiveGadgetDevice:PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            selectGadget: '',
            options: gadgetList,
            data: {
                name: '',
                subject: ''
            }
        }
    }

    render() {
        const {
            changeActiveGadgetDevice
        } = this.props;
        
        return (
            <Dropdown
                placeholder='Valitse laite'
                fluid
                selection
                options={this.state.options}
                onChange={(e, data) =>{changeActiveGadgetDevice(e, data)}}
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

// export default FileListDropDown;
export default connect(controlStateToProps, actions)(FileListDropDown);
