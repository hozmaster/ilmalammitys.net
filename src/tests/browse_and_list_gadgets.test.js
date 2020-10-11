/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

const theFolder = "/../data/gadgets"
const fs = require('fs');

test('list all files in the folder', () => {
    const targetPath = __dirname + theFolder;
    const files = fs.readdirSync(targetPath);

    files.forEach((element)=> {
            fs.readFile(targetPath+ '/' + element,  function read(err, data) {
                const theGadgetData = JSON.parse(data);
                console.log(theGadgetData);
            } );
        }
    )
});
