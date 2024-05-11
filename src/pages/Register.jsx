import React from 'react'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <form className='reg' action="">
      <label>Username
        <input type="text" placeholder='username'/>
      </label>
      <label htmlFor="">Email:
      <input type="text" placeholder='email address' />
      </label>
      <label htmlFor="">First Name:
      <input type="text" placeholder='first name'/>
      </label>
      <label htmlFor="">Last Name:
      <input type="text" placeholder='last name'/>
      </label>

      <label htmlFor="">Password:
      <input type="text" placeholder='password'/>
      </label>
      <label htmlFor="">Cofirm Password:
      
     <input type="text" placeholder='confirm_password' /> </label>
      <button>Sign up</button>
      </form>
    </div>
  )
}

export default Register