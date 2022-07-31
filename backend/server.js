import express, { json } from 'express'
import routes from './routes/routes.js'
const app = express()
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'


const PORT = 4000;
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

app.use(json())
app.use(cors())
app.use('/api', routes)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
})