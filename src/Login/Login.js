import React, { useState } from 'react'
import "./login.css"

const Login = () => {

  function handleClick() {

  
  }
    return (
    <div>
      <div className='login'>
        <label htmlFor="name">
          UserName/Email<input type='text'  />
        </label>
        <label htmlFor="password">
          Password<input type='password'  />
        </label>
        <button id="login" onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}

export default Login
