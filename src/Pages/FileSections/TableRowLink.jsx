/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
// import PropTypes from 'prop-types'

const TableRowLink = ({ text, url }) =>
    <a href={url}>
        {text}
    </a>;


export default TableRowLink

// Link.propTypes = {
//     active: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func.isRequired
// }

