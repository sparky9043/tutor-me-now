import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/ping', (_req, res) => {
  res.send('pong');
});

export default app;