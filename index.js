const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Routes
const homeRouter = require("./routes/homeRouter");
app.use(express.static(path.join(__dirname, "components")));
app.use("/", homeRouter);

// Listener
app.listen(port, () => {
  console.log("Chess running on port", port);
});
