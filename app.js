const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const commandTitle = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    }
const commandBody = {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }

const argv = yargs
.command('add', 'Add a new note', {
    title: commandTitle,
    body: commandBody
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: commandTitle,
    body: commandBody
})
.command('remove', 'Remove a note', {
    title: commandTitle
})
.help()
.argv;
var command = argv._[0];

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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
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


