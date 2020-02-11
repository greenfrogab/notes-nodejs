export default class Note {

  constructor(id, text) {
    this._id = id;
    this._text = text;
    this._status = false;
  }


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get text() {
    return this._text;
  }

  get status() {
    return this._status;
  }
}