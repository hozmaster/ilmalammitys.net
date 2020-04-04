/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

// https://medium.com/@wley3337/controlled-dropdown-selection-with-react-redux-and-semantic-ui-react-6a3b2b158659
import React from 'react'
import {Dropdown} from 'semantic-ui-react'

import gadgetList from '../../data/gadget_data';

class FileListDropDown extends React.Component {
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

    handleChange = (e, data) => {
        console.log (data.value);
        this.setState(
            {selectGadget: data.value} )
    }

    render() {
        return (
            <Dropdown
                placeholder='Valitse laite'
                fluid
                selection
                options={gadgetList}
                onChange={this.handleChange}
            >

            </Dropdown>
        )
    }
}

export default FileListDropDown;
