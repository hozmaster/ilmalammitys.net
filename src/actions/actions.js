/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {
    SET_GADGET_DROPDOWN_DEVICE,
    UPDATE_GADGET_DEVICE_NAME
} from "./action-types";


export const receivedMapMarkers  = (key) => dispatch => {
    console.log (key);
}

export const receiveGeocodeResults = payload => dispatch => ({
    type: UPDATE_GADGET_DEVICE_NAME,
    results: payload,
})

export const changeActiveGadgetDevice = (e, data) => dispatch => {
    dispatch(receivedMapMarkers(data.value));
    return {type: SET_GADGET_DROPDOWN_DEVICE, payload: data.value}
}
