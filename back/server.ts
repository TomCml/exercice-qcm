import express from "express"
import cors from "cors"
import morgan from "morgan"
import userRoutes from "./routes/userRoutes"

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: '*', 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur running on port : ${PORT}`);
});