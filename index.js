import express from 'express';
import usersRouter from './route/users.js';

const app = express();

app.use(express.json());

app.use('/user', usersRouter);

app.get('/', (req, res) => res.send('This is a get request'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Now running on PORT: http://localhost:${PORT}`));


