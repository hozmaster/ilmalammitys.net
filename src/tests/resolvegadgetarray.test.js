/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

const resolveFileArray = require('../data/resolvefilelistdata');

test('gadget resolve, fetch data Oilon', () => {
    expect(resolveFileArray("Oilon")).toBeTruthy()
});

test('gadget resolve, try to fetch data non existing gadget ', () => {
    expect(resolveFileArray("ASDFASDFASASdfdfdDDGadget")).toBeUndefined()
});
