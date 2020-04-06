/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */
import {
    SET_GADGET_DROPDOWN_DEVICE
} from "./types";

export const changeActiveGadgetDevice = (e, data) =>{
    return{ type: SET_GADGET_DROPDOWN_DEVICE, payload: data.value}
}

