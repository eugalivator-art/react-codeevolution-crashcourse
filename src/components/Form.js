import React from 'react';
import {useState} from 'react';

export const Form = () => {

  const [userName, setUserName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    alert(`formdata is ${userName}`)
  }

  return(
    <div>
      <form onSubmit = {handleSubmit}>
      <label>Name</label>
      <input type="text" value={userName} onChange={(event)=> setUserName(event.target.value)}/>

      <button type="submit">Submit</button>

      </form>

    </div>
  )
}