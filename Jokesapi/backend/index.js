import express, { Router } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            question: 'What do you call a bear with no teeth?',
            answer: 'A gummy bear'
        },
        {
            id: 2,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 3,
            question: 'What do you call a cow with no legs?',
            answer: 'Ground beef'
        },
        {
            id: 4,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 5,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 6,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 7,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 8,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 9,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 10,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 11,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },
        {
            id: 12,
            question: 'What do you call a fish with no eyes?',
            answer: 'Fsh'
        },

        {
            id:332,
            question:"this is temporary build the akhira ",
            answer:"true"
        }
        
    ]
     res.send(jokes)
});




 
const PORT = 5050
app.listen( PORT,() => {
    console.log(`server is running on ${PORT}`)
})