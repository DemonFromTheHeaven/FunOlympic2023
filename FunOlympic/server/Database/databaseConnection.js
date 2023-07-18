const mongoose = require('mongoose');

const DBConnection = process.env.DATABASE;
mongoose.connect(DBConnection, {
  
}).then(() => {
    console.log('Databse is connected!');
}).catch(() => {
    console.log('Database is not connected!');
});

