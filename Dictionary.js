/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Dictionary
    Purpose    : implementing hash table data structure that has key-value pair
---------------------------------------------*/

'use strict';

// importing required classes
let LinkedList = require('./LinkedList.js');
let Pair = require('./Pair.js');
let Hashable = require('./Hashable.js');

class Dictionary {
    // fields (instance variables)
    #arr;
    #size;

    //construcctor
    constructor(size) {
        this.#arr = new Array(size);
        this.#size = size;
        this.#arr.fill(new LinkedList());
    } 

    //method will add value in the dictionary with key
    put(k, v) {
        if (k instanceof Hashable) {
            if (!this.contains(k)) {
                let key = new Pair(k, v);
                this.#arr[k.hashVal() % this.#size].insert(key);
            }
            else {
                //add the value or directly replace it
                this.#arr[k.hashVal() % this.#size].change(k, new Pair(k, v));
            }
        }
        else {
            throw new Error("Something is wrong --> Key is not Hashable");
        }
    }

    //method will take Hashable key k and returns the value v associated with it
    get(k) {
        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                let result = this.#arr[i].getValue(k);
                if (result !== undefined){
                    return result;
                }
            }
        }
        else {
            throw new Error("Something is wrong --> Parameter is not valid type");
        }
        return undefined;
    }

    //method will check whether key is in dictionary or not
    contains(k) {
        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                if (this.#arr[i].find(k)){
                    return true;
                }
            }
        }
        else {
            throw new Error("Something is wrong --> Go figure out");
        }
        return false;
    }

    //method will check whether Dictionary is empty or not
    isEmpty() {
        for (let i = 0; i < this.#size; i++) {
            if (!this.#arr[i].isEmpty()){
                return false;
            }
        }
        return true;
    }

    //get the size
    getSize() {
        return this.#size;
    }

    //get the key
    getKey(pos) {
        return this.#arr[pos].getKeyTop();
    }

}

module.exports = Dictionary;

