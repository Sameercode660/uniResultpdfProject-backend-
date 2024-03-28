import express from 'express'
import { router } from './routes/result.routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/student', router)
app.get('/', (req, res) => {
    res.send('hello')
})
export {app}