/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Encoding
    Purpose    : process the filereading and encode it into binary
---------------------------------------------*/

let fs = require('fs'); // useful for file reading

let StringHash = require('./StringHash.js');
let Tree = require('./Tree.js');
let Dictionary = require('./Dictionary.js');

class Encoding {
 
    // stores the file which is being encoded
    #file
    constructor(fileName) {
        this.#file = fileName;
    }

    //method will convert path into binary code and put it in the dictionary
    destination(tree, binaryCode, list) {
        if (tree.getLtree() !== null){
            this.destination(tree.getLtree(), binaryCode + "0", list);
        }
        if (tree.getRtree() !== null){
            this.destination(tree.getRtree(), binaryCode + "1", list);
        }

        //add the binary code to dictionary
        if (tree.getLtree() === null && tree.getRtree() === null) {
            let value = new StringHash(tree.getCharacter());
            list.put(value, binaryCode); 
        }
    }

    //method will check if the set of trees will have tree of given key
    contains(trees, size, key) {
        for (let i = 0; i < size; i++) {
            if (key === trees[i].getCharacter()){
                return true;
            }
        }
        return false;
    }

    //method will process the File reading and executing output in binary
    encode() {
        // reads the entire file
        let dataFile = fs.readFileSync(this.#file, "utf8");
        // creates the dictionary
        let createDictionary = new Dictionary(256);
        //size of the Huffman Trees 
        let size = Math.min(dataFile.length, 256);

        for (let i = 0; i < dataFile.length; i++) {
            let keyVal = new StringHash(dataFile[i]);
            let charWeight = 1 / dataFile.length; 

            //add the weight if dictionary has key
            if (!createDictionary.contains(keyVal)) {
                createDictionary.put(keyVal, charWeight);
            }
            else{
                createDictionary.put(keyVal, createDictionary.get(keyVal) + charWeight);
            }
        }

        let huffTrees = new Array(size);
        let index = 0;
        for (let i = 0; i < dataFile.length; i++) {
            if (!this.contains(huffTrees, index, dataFile[i])){
                huffTrees[index++] = new Tree(dataFile[i], createDictionary.get(new StringHash(dataFile[i])));
            }
        }

        //change the length of array
        huffTrees.length = index;

        while (huffTrees.length > 1) {
            huffTrees.sort(function (a, b) { return a.compareTo(b) });

            // remove the smallest trees
            let child1 = huffTrees.shift();
            let child2 = huffTrees.shift();

            //add to the array
            child1 = child1.createTree(child1, child2);
            huffTrees.push(child1);
        }

        // creates the dictionary with binary encoding
        let binaryDict = new Dictionary(256);
        this.destination(huffTrees[0], "", binaryDict);

        // write the binary conversion into the output file 
        fs.writeFileSync(this.#file + ".huff", "");

        for (let i = 0; i < dataFile.length; i++) {
            let key = new StringHash(dataFile[i]);
            fs.appendFileSync(this.#file + ".huff", binaryDict.get(key) + " ");
        }

        //add new line at the end
        fs.appendFileSync(this.#file + ".huff", "\n");
    }
}

module.exports = Encoding;
