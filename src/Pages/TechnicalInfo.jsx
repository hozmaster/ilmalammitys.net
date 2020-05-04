/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Airheating} from "./Technics/Airheating";
import {CentralHeating} from "./Technics/CentralHeating";

const TechnicalInfo = () => <div>
    <Airheating style={{marginTop: "2em"}}/>
    <CentralHeating/>
</div>

export default TechnicalInfo