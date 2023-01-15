/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : LinkedList
    Purpose    : helpful to add, remove or retrieve data
---------------------------------------------*/

'use strict';

let Node = require('./Node.js');
let Pair = require('./Pair.js');

class LinkedList {
    //declaring fields
    #top;
    #size;
    #retData// retrieve data

    //constructor
    constructor() {
        this.#top = null;
        this.#size = 0;
    }

    //method will insert data in the list
    insert(newData){
        if(newData instanceof Pair){
            //create new Node
            this.#top = new Node(newData, this.#top);
            this.#size++;
        }
    }

    //method will retieve data with given value
    retData(newValue){
        let first = this.#top;
        while(first != null){
            if(first.getData().getKey().equals(newValue)){
                return first.getData();
            }
            first = first.getNext();
        }
        return null;
    }

    //method will replace the new data for a given key
    change(key, data){
        let first = this.#top;
        while(first != null){
            if(first.getData().getKey().equals(key)){
                first.setData(data);
            }
            first = first.getNext();
        }
    }

    //search with given key
    find(key){
        let newData = this.retData(key);
        if(newData != null){
            return true;
        }
        else{
            return false;
        }
    }

    //method will return value for given key
    getValue(key){
        let newData = this.retData(key);
        if(newData != null){
            return newData.getValue();
        }
        return undefined;
    }

    //check if the list is empty
    isEmpty(){
        return this.#top == null;
    }

    //get the top data in list
    getTop(){
        return this.#top.getData().getKey();
    }
}

module.exports = LinkedList;


