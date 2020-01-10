import express from "express";
import logger from "morgan";
import NotesRouter from "./routes/notes/notes-router";

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Notes router
let router = express.Router();
let notesRouter = new NotesRouter(router);
app.use("/notes", router);

app.listen(3000);
console.log("Server is running on port 3000");