
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from "./components/Header"

function App() {
  const [isLoading,setIsLoading]=useState(true);

  return (
    <>
      <Header />

      {isLoading ? (<p>yükleniyor..</p>) : (<p>yükleme durdu..</p>)}
      <button onClick={() => setIsLoading(!isLoading)}>{isLoading ? "yüklemeyi durdur":"yüklemeyi başlat"} </button>
      <Footer />

    </>
  )
}

export default App
 
