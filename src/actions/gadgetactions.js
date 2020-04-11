/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import {
    SET_GADGET_DROPDOWN_DEVICE,
    ADD_GADGET_DROPDOWN_DEVICE,
    UPDATE_GADGET_DROPDOWN_CHOICE
} from "./types";

export const addUserDropdownOption = (e, data) => {
    const userAddedItem = {
        key: data.value,
        text: data.value,
        value: data.value
    }
    return {type: ADD_GADGET_DROPDOWN_DEVICE, payload: userAddedItem}
};

export const updaterDropdownOption = (e, data) => {
    const userAddedItem = {
        key: data.key,
        text: data.text,
        value: data.value
    }
    return {type: UPDATE_GADGET_DROPDOWN_CHOICE, payload: userAddedItem}
};

export const changeActiveGadgetDevice = (e, data) => {
    console.log (data);
    return {type: SET_GADGET_DROPDOWN_DEVICE, payload: data.value}
}
