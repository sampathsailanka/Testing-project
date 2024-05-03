const express = require("express");
const cors = require("cors");
const app = express();
const appRouter = require("./routes/emailRouter");

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(express.json());
app.use("/user", appRouter);
app.options("*", cors());

app.listen(5000, () => {
  console.log("listening on port 5k");
});
