import mongoose from "mongoose";

//docker run -p 27017:27017 mongo
export default class NotesMongoDbRepository {

  constructor() {
    mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true });
    this._Note = mongoose.model('Note', { text: String, status: Boolean });
  }

  getNotes() {
    return this._Note.find({});
  }

  getNote(id) {
    return this._Note.findById(id);
  }

  addNote(note) {
    let noteDoc = new this._Note({ text: note.text, status: note.status });
    return noteDoc.save();
  }

  delete(id) {
    return this._Note.deleteOne({ _id: id }, (err) => {
      throw err;
    });
  }
}