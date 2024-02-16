import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ContentHeader from './Components/ContentHeader/ContentHeader'
import ContactForm from './Components/ContactForm/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main className='main_container'>
      <ContentHeader/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App
