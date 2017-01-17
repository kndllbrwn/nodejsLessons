const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
     title, //title : title pre-ES6
     body   
    };
   
   var duplicateNotes = notes.filter((note) => note.title === title);//ES6 way of running boolean check

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    // currentNote = currentNote.length > 0 ? currentNote[0] : 'Note not found';
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('------');
    console.log(note.title);
    console.log(note.body);
};

module.exports = {
   addNote, // pre ES6 sytax = addNote : addNote
   getAll, // pre ES6 sytax = getAll : getAll
   getNote,
   removeNote,
   logNote
}; 