'use strict';
const fs = require('fs'),
    util = require('util');
let Drug = require('./model/drug'),
    autoComplete = require('./autocomplete');

// convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);
let drugs = [];
let a;

async function getDrugs() {
    try {
       let data =  await readFile('data/drug.data', 'utf-8');
       const line = data.split('\n');
       for(let i=0; i<line.length; i++) {
           const drugInfo = line[i].split('\t');
            drugs.push(new Drug(drugInfo[0], drugInfo[1], drugInfo[2],
                drugInfo[3], drugInfo[4], drugInfo[5], drugInfo[6], drugInfo[7]));
        }
        initializeAutoComplete();
        
        return drugs;
    } catch (err) {
        return err;
    }      
}

function initializeAutoComplete(prefix) {
    autoComplete.connectAutocomplete(onReady);
    return autoComplete.search(prefix);
}
 function onReady(autoComplete) {
     autoComplete.initialize(function(addItem) {
         addItem(drugs);
     });
     //console.log(autoComplete.search('PAREDRINE'));
 }


module.exports.getDrugs = getDrugs()
module.exports.search = (prefix) => {return initializeAutoComplete(prefix)}
