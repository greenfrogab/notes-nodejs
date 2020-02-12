import express from "express";
import logger from "morgan";
import NotesRouter from "./routes/notes-router";

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Notes router
let router = express.Router();
let notesRouter = new NotesRouter(router);
app.use("/notes", router);


let port = 3000;

if (process.env.PORT !== undefined) {
  port = process.env.PORT;
}

console.log("port: ", port);
app.listen(port);

console.log("Server is running on port: " + port);