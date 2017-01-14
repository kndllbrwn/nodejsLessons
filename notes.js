console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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