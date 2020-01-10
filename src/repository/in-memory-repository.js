import uuid from "uuid/v1";

export default class InMemoryRepository {

  constructor() {
    this._notes = new Map();
  }

  getNotes() {
    return this._notes.values();
  }

  getNote(id) {
    return this._notes.get(id);
  }

  addNote(note) {
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
