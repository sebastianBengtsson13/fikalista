'use strict';

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello world');

fs.readFile('.\\Resorces\\fikare.json', function (err){
    if (err){
        console.log(err);
    }
    console.log(fs.p);
});

var message = rl.question("Skriv något!", function (name) {
    console.log(message);
});

console.log("git test")