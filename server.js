const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const donorsRouter = require('./routes/donors');
app.use('/donors', donorsRouter);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
