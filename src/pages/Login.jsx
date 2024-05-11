import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
      <form className='log' action="">
      <label>Username
        <input type="text" placeholder='username'/>
      </label>
      <label htmlFor="">Email:
      <input type="text" placeholder='email address' />
      </label>
      <label htmlFor="">Password:
      <input type="text" placeholder='password'/>
      </label>
      <label htmlFor="">Cofirm Password:
      
     <input type="text" placeholder='confirm_password' /> </label>
      <button>Login</button>

      </form>
    </div>
  )
}

export default Login