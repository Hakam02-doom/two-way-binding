import React from 'react'
import { useState } from 'react'

const App = () => {

  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(`Form submitted with username: ${userName}`)
    setUserName('')

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App