import express from "express";
import usersRoutes from "./routes/usersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Get root route");
});


app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

export default app;