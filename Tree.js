/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Tree
    Purpose    : Make new Tree with left and right tree with data
---------------------------------------------*/

'use strict'

class Tree {
    //instance variables
    #weight;
    #character;
    #lTree;
    #rTree;

    //constructor
    constructor(newChar, newWeight){
        this.#weight = newWeight;
        this.#character = newChar;
        this.#lTree = null;
        this.#rTree = null;
    }

    //getter methods for private fields
    getWeight(){
        return this.#weight;
    }

    getCharacter(){
        return this.#character;
    }
    
    getLtree(){
        return this.#lTree;
    }

    getRtree(){
        return this.#rTree;
    }

    //this helper method will help to get the minimum character
    helper(newTree){
        if(newTree.#character == null){
            let lchar = this.helper(newTree.#lTree);
            let rchar = this.helper(newTree.#rTree);
    
            if(lchar <= rchar){
                return lchar;
            }
            else{
                return rchar;
            }
        }
        return newTree.#character;
    }

    //method will compare two tree
    compareTo(newTree){
        let result;
        if(Math.abs(newTree.#weight - this.#weight) > Math.pow(10, -12)){
            if(newTree.#weight - this.#weight < 0){
                result = 1;
            }
            else if(newTree.#weight - this.#weight > 0){
                result = -1;
            }
        }
        //if the weight are same then check for the smallest character
        else{
            let char1 = this.helper(newTree);
            let char2 = this.helper(this);

            if(char1 > char2){
                result = -1;
            }
            else if(char1 < char2){
                result = 1;
            }
            else{
                result = 0;
            }
        }
        return result;
    }

    //method will create new tree by combining both left and right tree
    createTree(leftTree, rightTree){
        let counter = null;
        if(leftTree instanceof Tree && rightTree instanceof Tree){
            counter = new Tree(null, leftTree.#weight + rightTree.#weight);
            counter.#lTree = leftTree;
            counter.#rTree = rightTree;
        }
        return counter;
    }
}

module.exports = Tree;