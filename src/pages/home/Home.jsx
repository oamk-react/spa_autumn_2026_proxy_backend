import axios from 'axios'
import { useEffect, useState } from 'react'
import './Home.css'

export default function Home({ currency }) {
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState(0)
  const [rate, setRate] = useState(null)

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + currency)
      .then((response) => setRate(response.data.rate))
      .catch((error) => console.log(error))
  }, [currency])

  const convert = (event) => {
    event.preventDefault()
    if (rate !== null) {
      setResult(Number(amount) * rate)
    }
  }

  return (
    <form onSubmit={convert}>
      <h3>Convert currency to euros</h3>
      <p>Source currency is {currency}</p>
      <p>{rate === null ? 'Loading rate...' : `Rate: ${rate.toFixed(3)}`}</p>
      <label>Amount in EUR</label>
      <div>
        <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" />
        <button disabled={rate === null}>Convert</button>
      </div>
      <output>{result.toFixed(2)}</output>
    </form>
  )
}
