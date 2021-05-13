import express from 'express';
import usersRoutes from './routes/users';
import identificationsRoutes from './routes/identifications';
import mongoose from 'mongoose';
import { CONNECTION_URL, PORT } from './config';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', usersRoutes);
app.use('/identifications', identificationsRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


// app.get('/', (req, res) => {
//     res.send("Hello from Homepage");
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port: http://localhost:${PORT}`)
// });