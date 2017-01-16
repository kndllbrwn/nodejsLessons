console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body); 
    //var response = note ? `${note.title} successfully saved!` : "That title is in use!"; 
    //console.log(response); Ditched in favor of refactored code
    if (note){
        notes.logNote(note);
    } else {
        console.log('Note not found');
    } 
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note){
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }  
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}


