import mongoose from 'mongoose';
const { Schema } = mongoose;

import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true });
const conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
export default conn;