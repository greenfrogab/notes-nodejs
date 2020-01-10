import InMemoryRepository from "../repository/in-memory-repository";
import Note from "../routes/notes/note";

export default class NotesManager {

  constructor() {
    this._repository = new InMemoryRepository();
  }

  /**
   * Returns all notes
   */
  getAllNotes() {
    return this._repository.getNotes();
  }

  /**
   * Returns note found by supplied id.
   */
  getNote(id) {
    return this._repository.getNote(id);
  }

  /**
   * Creates new note by supplied "text".
   */
  createNote(text) {
    let note = new Note(undefined, text);
    return this._repository.addNote(note);
  }

  /**
   * Deletes note found by supplied id
   */
  delete(id) {
    //TODO: note yet implemented
  }

  /**
   * Checks whether a note with supplied id already exists or not.
   */
  hasNote(id) {
    return this._repository.has(id);
  }
}