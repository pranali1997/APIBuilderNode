const Note = require('../model/note.model.js')


exports.create = (req, res) => {

    if (!req.body.content) {
        return res.status(400).send({
            //res.send({message:"Post a note"});
            message: "note cannot be empty"
        });
    }

    const notes = new Note({
        title: req.body.title || "untitled Note",
        content: req.body.content
    });


    notes.save().
        then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some Error occurred while creating node"
            });
        });
}

exports.findAll = (req, res) => {
    Note.find().
        then(note => {
            res.send(note);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some Error Occurred while retrieving notes"
            });
        });
}

exports.findOne = (req, res) => {
    // console.log(req.params)
    Note.findById(req.params.noteId).
        then(note => {
            console.log("note data--> ",note)
            if (!note) {
                res.status(404).send({
                    message: "Note not found with Id" + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving with node Id" + req.params.noteId
            });
        });
}

exports.update = (req,res) => {
    Note.updateOne({"id":req.params.noteId},{$set:{"title":req.body.title} }).
    then(data => {  
        res.send(data);
    }).catch(err => {
        res.status(404).send({
            message : "Error occurred while updating id" + req.params.noteId
        })
    })

}

exports.delete = (req, res) => {
    Note.findOneAndDelete(req.params.noteId).
        then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "NOTE NOT found with id :" + req.params.noteId
                });
            }
            res.send({
                message: "Note Deleted Successfully"
            });
        }).catch(er => {
            if (err.kind === ObjectId) {
                return res.status(404).send({
                    message: " Note not found with id " + res.params.noteId
                });
            }
        })
}