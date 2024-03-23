const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const port = 3000;

// Available Routs
app.use("./api/auth", require("./routes/auth"));
app.use("./api/note", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
