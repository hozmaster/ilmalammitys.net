/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {
    SET_GADGET_DROPDOWN_DEVICE,
    UPDATE_GADGET_DEVICE_NAME
} from "./types";


export const receiveGeocodeResults = payload => ({
    type: UPDATE_GADGET_DEVICE_NAME,
    results: payload
})

export const changeActiveGadgetDevice = (e, data) => {
    return {type: SET_GADGET_DROPDOWN_DEVICE, payload: data.value}
}
