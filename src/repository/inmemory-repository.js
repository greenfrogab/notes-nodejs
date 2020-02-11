import uuid from "uuid/v1";

export default class InMemoryRepository {

  constructor() {
    this._notes = new Map();
  }

  getNotes() {
    return new Promise(resolve => {
      return resolve(this._notes.values())
    });
  }

  getNote(id) {
    return new Promise((resolve, reject) => {
      if (id === undefined) {
        return reject("Invalid id: " + id);
      }
      return resolve(this._notes.get(id));
    });
  }

  addNote(note) {
    return new Promise(resolve => {

    });
    let id = uuid();
    note.id = id;
    this._notes.set(id, note);
    return note;
  }

  delete(id) {
    //TODO: note yet implemented
  }

  hasNote(id) {
    return this._notes.has(id);
  }
}