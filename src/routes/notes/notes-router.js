import HttpStatus from 'http-status-codes';
import NotesManager from "../../manager/notes-manager";

export default class NotesRouter {

  constructor(router) {
    this._notesManager = new NotesManager();

    //GET ALL
    router.get("/", (req, res) => {
      return this.getAll(req, res);
    });

    //GET by id
    router.get("/:id", (req, res) => {
      return this.get(req, res);
    });

    //POST
    router.post("/", (req, res) => {
      return this.post(req, res);
    });

    //DELETE
    router.delete("/:id", (req, res) => {
      return this.delete(req, res);
    });
  }

  getAll(req, res) {
    this._notesManager.getAllNotes()
        .then(notes => {
          res.status(HttpStatus.OK)
              .json(Array.from(notes));
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
              .send(err);
        });
  }

  get(req, res) {
    let id = req.params.id;

    if (id === undefined) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    this._notesManager.getNote(id)
        .then(note => {
          res.status(HttpStatus.OK)
              .json(note);
        })
        .catch(err => {
          res.status(HttpStatus.NOT_FOUND).send(err)
        });
  }

  post(req, res) {
    let body = req.body;
    this._notesManager.createNote(body.text)
        .then(note => {
          res.status(HttpStatus.CREATED)
              .json(note)
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR)
              .send(err);
        });

  }

  delete(req, res) {
    res.send({ "method": "Not implemented yet!" });
  }
}