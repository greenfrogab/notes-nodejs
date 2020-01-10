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
    let notes = this._notesManager.getAllNotes();
    return res
        .status(HttpStatus.OK)
        .json(Array.from(notes));
  }

  get(req, res) {
    let id = req.params.id;

    if (id === undefined) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    let note = this._notesManager.getNote(id);

    if (note === undefined) {
      return res.status(HttpStatus.NOT_FOUND).send();
    }

    return res
        .status(HttpStatus.OK)
        .json(note);
  }

  post(req, res) {
    let body = req.body;
    let note = this._notesManager.createNote(body.text);

    return res
        .status(HttpStatus.CREATED)
        .json(note);
  }

  delete(req, res) {
    res.send({ "method": "Not implemented yet!" });
  }
}