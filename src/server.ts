import express, { response } from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Welcome to Next Level!  NLW 04 - Node"});
});

app.post("/", (request, response) => {
  return response.json({ message: "Data saved successfully!"});
});

app.listen(3333, () => console.log("Server is running!"));
