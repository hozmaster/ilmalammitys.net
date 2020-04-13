/*
* Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
*/

// import gadgets from "./gadget_dropdown_data"
const gadgets = require ("../data/gadget_dropdown_data");

const resolveFileArray = (key) => {
    return gadgets.find(element => element.gadget === key);
};

module.exports = resolveFileArray;


