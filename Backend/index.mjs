import express from "express";
import db from "./models/";
import cors from "cors";
import router from "./routes/index";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.get("/home", (req, res) => {
  return "hello world";
});

const port = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
