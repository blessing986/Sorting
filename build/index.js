"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedLists_1 = require("./LinkedLists");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection("Xaayb");
// charactersCollection.sort()
// console.log(charactersCollection.data);
const linkedList = new LinkedLists_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
