import React, { useState } from 'react'
import './App.scss'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function Registration(e){
    e.preventDefault();
    if(name != '' && email != '' && password != '' && confirmPassword != ''){
      if(password == confirmPassword){
        toast('Cadastrado com Sucesso!!!')
      }
      else if(password != confirmPassword){
        toast.error('Senhas diferentes!!!')
      }
    }
    else if(name == '' || email == '' || password == '' || confirmPassword == ''){
      toast.warn('Campo vazio!!!')
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <form onSubmit={Registration}>
          <h1>Registration</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name...'/>
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email...'/>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password...'/>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password...'/>
          <button type='submit'>Confirm</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
