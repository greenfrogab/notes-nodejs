import mongoose from "mongoose";

//docker run -p 27017:27017 mongo
export default class NotesMongoDbRepository {

  constructor() {
    let mongoHost = "localhost";
    if (process.env.MONGO_HOST !== undefined) {
      mongoHost = process.env.MONGO_HOST;
    }

    let mongoPort = 27017;
    if (process.env.MONGO_PORT !== undefined) {
      mongoPort = process.env.MONGO_PORT;
    }

    let mongoDb = "notes";
    if (process.env.MONGO_DATABASE !== undefined) {
      mongoDb = process.env.MONGO_DATABASE;
    }

    let mongoConnectionUrl = "mongodb://" + mongoHost + ":" + mongoPort + "/" + mongoDb;
    console.log("Mongo db url: ", mongoConnectionUrl);

    mongoose.connect(mongoConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
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