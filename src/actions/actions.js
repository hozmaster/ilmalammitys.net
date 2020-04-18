/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {
    SET_GADGET_DROPDOWN_DEVICE,
    UPDATE_GADGET_DEVICE_NAME
} from "./action-types";

const resolveFileArray = require("./resolvefilelistdata");

//
// export const receiveGeocodeResults = payload => dispatch => ({
//     type: UPDATE_GADGET_DEVICE_NAME,
//     results: payload,
// })

export const changeActiveGadgetDevice = (e, data) => dispatch => {
    return {type: SET_GADGET_DROPDOWN_DEVICE, payload: resolveFileArray(data.value)}
}
