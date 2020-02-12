import uuid from "uuid/v1";

export default class InMemoryRepository {

  constructor() {
    this._notes = new Map();
  }

  getNotes() {
    return new Promise(resolve => {
      let notes = new Array();

      let noteIterator = this._notes.values();
      let result = noteIterator.next();

      while (!result.done) {
        notes.push(result.value);
        result = noteIterator.next();
      }

      return resolve(notes)
    });
  }

  getNote(id) {
    throw "Not yet implemented";
  }

  addNote(note) {
    return new Promise(resolve => {
      let id = uuid();
      note.id = id;
      this._notes.set(id, note);
      return resolve(note);
    });
  }

  delete(id) {
    throw "Not yet implemented";
  }

  hasNote(id) {
    return this._notes.has(id);
  }
}