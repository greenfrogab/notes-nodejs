import NotesManager from "./manager/notes-manager";

let notesManager = new NotesManager();


let promise1 = notesManager.createNote("Start the build");
let promise2 = notesManager.createNote("Prepare presentation");
let promise3 = notesManager.createNote("Call mom");

Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log("Added Notes");

      notesManager.getAllNotes()
          .then(notes => {
            notes.forEach(note => {
              console.log("Note: ", note);
            });
          });
    });

