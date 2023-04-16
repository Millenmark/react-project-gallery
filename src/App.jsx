import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layout'
import { FrontmentorPage, GithubPage, NotFound } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<FrontmentorPage/>}/>
          <Route path="/personal" element={<GithubPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
