import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layout'
import { HomePage, AboutPage } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
