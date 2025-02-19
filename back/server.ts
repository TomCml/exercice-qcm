import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONT_URL || "http://localhost:3000"],
    allowedHeaders: "*",
    credentials: true,
  })
);

app.use("/api");
app.use("/api");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur running on port : ${PORT}`);
});