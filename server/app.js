require('dotenv').config();
const express = require('express');
const connectDB = require('./connection');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(cors());

app.use('/api', routes);

app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`)
});