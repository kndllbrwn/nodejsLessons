console.log('Starting notes.js');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.notesAdd = (a,b) => {
    console.log(a + b);
    return null;
};