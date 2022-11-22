// test- headTest
const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['x','y','z']),'X');