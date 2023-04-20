import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import uri from "./db/connect";
import router from "./routes/task";
dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(router)

const start = async () => {
    try {
      await mongoose.connect(uri)
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

start()