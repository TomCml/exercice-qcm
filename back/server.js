const express = require("express");
const cors = require("cors");
const morgan = require("morgan")

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONT_URL, "http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: "*",
    credentials: true,
  })
);

app.use("/api", userRoutes);
app.use("/api", qcmRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur running on port : ${PORT}`);
});