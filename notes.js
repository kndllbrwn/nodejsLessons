console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
     title, //title : title pre-ES6
     body   
    };

    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e){

    }
    
   var duplicateNotes = notes.filter((note) => note.title === title);//ES6 way of running boolean check

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log("Getting all notes")
};

var getNote = (title) => {
    console.log("Fetching note", title);
};

var removeNote = (title) => {
    console.log("Removing note", title);
};

module.exports = {
   addNote, // pre ES6 sytax = addNote : addNote
   getAll, // pre ES6 sytax = getAll : getAll
   getNote,
   removeNote
}; 