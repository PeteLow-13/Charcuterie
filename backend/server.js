import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'; //! need to add .js for the javascript filename 'cause in the backgorund

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('API is runing...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Sever running in ${process.env.NODE_ENV} on port: ${PORT}`)
);
