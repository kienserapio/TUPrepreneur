import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span> Login Here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}
