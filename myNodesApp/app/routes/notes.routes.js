module.exports = (app) => {
    const notes = require('../controller/note.controller');

    //create a new Note
    app.post('/notes', notes.create);

    app.get('/notes',notes.findAll);

    app.get('/notes/:noteId',notes.findOne);

   // app.get('/notes',notes.update);

    app.delete('/notes',notes.delete);

}