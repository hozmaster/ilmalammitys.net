/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Dropdown} from 'semantic-ui-react'

import gadgetList from  './gadget_data';

class FileListDropDown extends React.Component {
    render() {
        return (
            <Dropdown
                placeholder='Select Friend'
                fluid
                selection
                options={gadgetList}>
            </Dropdown>
        )
    }
}

export default FileListDropDown;
