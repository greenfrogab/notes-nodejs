import Note from "../routes/notes/note";

export default class NotesManager {

  constructor() {
  }

  /**
   * Returns all notes
   */
  getAllNotes() {
    throw "Not Implemented";
  }

  /**
   * Returns note found by supplied id.
   */
  getNote(id) {
    throw "Not Implemented";
  }

  /**
   * Creates new note by supplied "text".
   */
  createNote(text) {
    throw "Not Implemented";
  }

  /**
   * Deletes note found by supplied id
   */
  delete(id) {
    throw "Not Implemented";
  }

  /**
   * Checks whether a note with supplied id already exists or not.
   */
  hasNote(id) {
    throw "Not Implemented";
  }
}