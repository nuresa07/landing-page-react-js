import React from 'react'
import Header from './Components/Header'
import Feature from './Components/Feature'
import About from './Components/About'
import aboutImg from './images/Frame 19.png'
import aboutImg1 from './images/download.png'
import Presentation from './Components/Presentation'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutImg} title='Comes with all you need for daily life' button='get the app' />
      <Presentation />
      <About image={aboutImg1} title='Download and get the App now' button='get the app' />
      <Contact />
    </div>
  )
}

export default App
