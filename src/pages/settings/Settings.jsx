import './Settings.css'

export default function Settings({currency, setCurrency}) {

  console.log(currency)
  return (
    <form>
      <h3>Settings</h3>
      <p>Select source currency</p>
      <select
        value={currency}
        onChange={(event)=>setCurrency(event.target.value)}
      >
        <option value="SEK">SEK</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
    </form>
  )
}