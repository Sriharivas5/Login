import React from 'react';
import "./signup.css"

const Register = () => {
    return (
        <div>
            <div className='signup'>
                <label htmlFor="name">
                    Name<input type='text'></input>
                </label>
                <label htmlFor="email">
                    Email<input type='email'></input>
                </label>
                <label htmlFor="mobile">
                    Mobile<input type='number'></input>
                </label>
                <label htmlFor="password">
                    Password<input type='password'></input>
                </label>
                <label htmlFor="password">
                    Re-Enter-Password<input type='password'></input>
                </label>
                <button id="signup">SignUp</button>
            </div>
        </div>
    )
}

export default Register
