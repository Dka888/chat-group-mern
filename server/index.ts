import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './app/routes/userRoutes';
import channelRoutes from './app/routes/channelRoutes';
import messageRoutes from './app/routes/messageRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3333;
const db = process.env.URI_MONGODB || 'mongodb+srv://dmitrijkosow:mongoDB@cluster0.k7fce6l.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/messages', messageRoutes);

mongoose.connect(db)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const start = async() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch(e) {
    console.log('Error', e)
  }
};

start();