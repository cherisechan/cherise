import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import './App.css'

function App() {

  return (
    <>
      <Landing></Landing>
      <Projects></Projects>
    </>
  )
}

export default App
