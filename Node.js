/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Node
    Purpose    : helpful to implement linkedList
---------------------------------------------*/

'use strict';

class Node {
    //instance variables
    #data;
    #next;

    //constructor
    constructor(data, next) {
        this.#data = data;
        this.#next = next;
    } 

    //get the data
    getData(){
        return this.#data;
    }

    //set the new data
    setData(newData){
        this.#data = newData;
    }

    //get the next pointer
    getNext(){
        return this.#next;
    }
}

module.exports = Node;