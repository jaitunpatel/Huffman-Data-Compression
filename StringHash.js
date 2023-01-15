/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : StringHash
    Purpose    : String value hold by keys
---------------------------------------------*/

'use strict';

// import required Super class
let Hashable = require('./Hashable.js');

class StringHash extends Hashable {
    // fields (instance variables)
    #str;

    //constructor
    constructor(value) {
        //super class constructor
        super(); 
        if (typeof (value) == "string"){
            this.#str = value;
        }
        else{
            throw new Error("Something is wrong --> Not a string");
        }
    }

    //get method for string
    getStr() {
        return this.#str;
    }

    //method will return exponential function = num^power
    expFunction(num, power){
        let value = 1;
        for(let i = 0; i < power; i++){
            value = value*num;
        }
        return value;
    }

    //method will return corresponding string value as int
    hashVal(){
        let ascii;
        let strLength = this.#str.length;
        let result = 0;
        let counter = 3;

        for(let i = 0; i < strLength; i++){
            ascii = this.#str.charCodeAt(i);
            result = result + ascii*this.expFunction(counter, (strLength-1)-i);
        }
        return result;
    }

    //method will chech if the both keys are of same type
    equals(x) {
        if (x instanceof StringHash) {
            if (x.hashVal() === this.hashVal()) {
                return true;
            }
        }
        return false;
    }
}
module.exports = StringHash;