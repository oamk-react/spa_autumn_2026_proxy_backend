import { useState } from 'react'
import './Home.css'

export default function Home({currency}) {
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState(0)

  const convert = (event) => {
    event.preventDefault()
    setResult(amount * 0.11)
  }

  return (
    <form onSubmit={convert}>
      <h3>Convert currency to euros</h3>
      <p>Source currency is {currency}</p>
      <label>Amount in EUR</label>
      <div>
        <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" />
        <button>Convert</button>
      </div>      
      <output>{result}</output>
    </form>
  )
}
