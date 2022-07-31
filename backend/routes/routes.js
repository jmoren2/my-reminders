import express, { json } from 'express'
const router = express.Router();
import mongoose from 'mongoose'

import Reminder from '../models/reminder.js'

router.post('/reminder/create', (req, res) => {
    console.log('Calling out to /api/reminder/create')

    const newReminder = new Reminder({
        title: req.body.title,
        body: req.body.body
    })

    newReminder.save()
        .then(data => {
            res.json(data)
            console.log('Call to /create was successful! Reponse: ')
            console.log(data)
        }).catch(e => {
            console.log('Call to /create failed. Error: ')
            console.log(e)
        })

})

router.post('/reminder/delete', (req, res) => {
    console.log('Calling out to /api/reminder/delete')

    const id = req.body.id
    console.log(id)

    Reminder
        .findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) }).exec();

    Reminder.find((err, docs) => {
        if (!err) {
            console.log(JSON.stringify(docs))
            res.status(200).json(docs)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });

})

router.get('/reminder/list', function (req, res, next) {
    console.log('Calling out to /api/reminder/list')

    Reminder.find((err, docs) => {
        if (!err) {
            console.log(JSON.stringify(docs))
            res.status(200).json(docs)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });

});


export default router