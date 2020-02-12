import HttpStatus from 'http-status-codes';
import NotesManager from "../manager/notes-manager";

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
   res.status(HttpStatus.NOT_IMPLEMENTED).send({ "method": "Not implemented yet!" });
  }

  post(req, res) {
    res.status(HttpStatus.NOT_IMPLEMENTED).send({ "method": "Not implemented yet!" });
  }

  delete(req, res) {
    res.status(HttpStatus.NOT_IMPLEMENTED).send({ "method": "Not implemented yet!" });
  }
}