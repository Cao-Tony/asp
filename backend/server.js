const app = require('./express');
const mongoose = require('mongoose');

require('dotenv').config(); 

const PORT = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('connected', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});