/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
    {
        key: 'Parma 10',
        text: 'Parma 10',
        value: 'Parma 10',
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
    },
];

const DropdownExampleSelection = () => (
    <Dropdown
        placeholder='Select Friend'
        fluid
        selection
        options={friendOptions}
    />
)

export default DropdownExampleSelection