import { getProfile } from "./utils/resolve";
import express from "express";
import cors from "cors";

const app = express();
const port: number = parseInt(process.env.PORT as string) || 3000;

app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
  })
);
app.set("view engine", "ejs");

app.get("/profile/:username", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const response = await getProfile(req.params.username);
  res.send(response);
});

app.listen(port, async () => {
  console.log(`listening at PORT:${port}`);
});
