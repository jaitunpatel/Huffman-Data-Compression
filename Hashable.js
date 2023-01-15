/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Hashable
    Purpose    : This class will hold the data
---------------------------------------------*/

'use strict';

class Hashable {
    //constructor
    constructor() {
        if (this.constructor === Hashable) {
            throw new Error("This will not create Hashable object");
        }
    }
    
    //polymorphic methods
    hashVal(){
        throw new Error("Something is wrong --> hashVal() method not found");
    }

    equal(x){
        throw new Error("Something is wrong --> equal(x) method not found");
    }
}

module.exports = Hashable;
