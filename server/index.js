import express from 'express'
import cors from 'cors'
import rateRouter from './routes/rateRouter.js'

const app = express()
app.use(cors())
app.use('/rate', rateRouter)

app.listen(3000, () => console.log('Listening on port 3000'))
