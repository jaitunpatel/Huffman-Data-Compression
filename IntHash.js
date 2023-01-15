/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : IntHash
    Purpose    : methods og this class will have int values in key
---------------------------------------------*/

'use strict';

// import required super class
let Hashable = require('./Hashable.js');

class IntHash extends Hashable {
    //private fields
    #value;

    //constructor
    constructor(newValue) {
        super();
        if (typeof (newValue) == "number"){
            this.#value = newValue;
        }
        else{
            throw new Error("Something is wrong --> value is not a int number");
        }
    }

    //method will return the key field
    hashVal() {
        return this.#value;
    }

    //method will chech if the both keys are of same type
    equal(x){
        if(x instanceof IntHash){
            if(x.hashVal() == this.hashVal()){
                return true;
            }
        }
        return false;
    }
}

module.exports = IntHash;