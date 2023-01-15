/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Main
    Purpose    : allows to proceed the entire assignment
---------------------------------------------*/

'use strict'

let Encoding = require('./Encoding.js');

function main() {
    //Initialising Encoding class
    let processFile = new Encoding(process.argv[2]);
    // process to encode the given file
    processFile.encode(); 
}

main();