'use strict';

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello world');

fs.readFile('.\\Resorces\\fikare.json', function (err,data){
    if (err){
        console.log(err);
    }
    console.log(data);
});

var message = rl.question("Skriv något!", function (name) {
    console.log(message);
});
