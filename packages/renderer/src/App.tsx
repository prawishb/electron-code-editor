import React, { useState, useCallback } from 'react'
import './App.css'

import Editor from './components/Editor'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('')
  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="container">
      <section className="filebrowser__wrapper"></section>
      <Editor initialDoc={doc} onChange={handleDocChange} />
    </div>
  )
}

export default App
