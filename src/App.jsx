import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Settings from './pages/settings/Settings'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router'

function App() {
  const [sourceCurrency, setSourceCurrency] = useState('SEK')

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Routes>  
          <Route 
            path="/"
            exact
            element={<Home currency={sourceCurrency} />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/settings"
            element={<Settings currency={sourceCurrency} setCurrency={setSourceCurrency}/>}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
