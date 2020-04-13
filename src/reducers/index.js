/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */
import { combineReducers } from 'redux'

import {
    SET_GADGET_DROPDOWN_DEVICE
} from '../actions/action-types'


const initialGadgetsState = {
     activeGadgetDevice:  {}
};

const defaultGadgetDropDownEvents = (state = initialGadgetsState, action) => {
    if (action.type === SET_GADGET_DROPDOWN_DEVICE
    ) {
        return {
            ...state,
            activeGadgetDevice: action.payload,
        }
    } else {
        return state
    }
}

// creates a root reducer and combines different reducers if needed
const rootReducer = combineReducers({
    gadgetSelectionControls : defaultGadgetDropDownEvents
});

export default rootReducer;