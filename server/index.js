import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())

// GET /rate/SEK -> { rate: <SEK to EUR> }
app.get('/rate/:currency', async (req, res) => {
  const response = await axios.get(process.env.API_URL, {
    params: {
      base_currency: req.params.currency,
      currencies: 'EUR',
      apikey: process.env.API_KEY,
    },
  })
  res.json({ rate: response.data.data.EUR })
})

app.listen(3000, () => console.log('Listening on port 3000'))
