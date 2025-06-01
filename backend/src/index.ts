import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import projectRoutes from './routes/project.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Yoliday Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 