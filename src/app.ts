import express from 'express';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'node:constants';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => console.log('Server running'))
