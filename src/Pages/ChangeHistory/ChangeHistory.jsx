/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from "react";

const ChangeHistory = ({text, url}) =>
    <a href={url}>
        {text}
    </a>;

export default ChangeHistory