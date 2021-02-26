import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { db } from './models/index.js';
import { systemRouter } from './routes/systemRouter.js';
import { serverRouter } from './routes/serverRouter.js';
dotenv.config({ path: './config/config.env' });

async function connectDB() {
  try {
    const conn = await db.mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.log(err);
    process.exit;
  }
}

connectDB();
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use(systemRouter);
app.use(serverRouter);
app.get('/', (_, res) => {
  res.send('API em Execução');
});

app.listen(process.env.PORT);
