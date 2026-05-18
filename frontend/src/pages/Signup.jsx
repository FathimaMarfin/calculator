import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    console.log('Signup form submitted', { username, email })

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      const result = await response.json()
      if (!response.ok) {
        setError(result.error || 'Signup failed')
        return
      }
      console.log('Success:', result)
      navigate('/login')
    } catch (error) {
      console.error('Error:', error)
      setError('Unable to reach server')
    } finally {
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
      <div className='w-full max-w-md rounded-3xl bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-center text-3xl font-bold text-green-900'>Signup</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <label className='block text-sm font-medium text-slate-700'>
            Username
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none'
            />
          </label>
          <label className='block text-sm font-medium text-slate-700'>
            Email
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none'
            />
          </label>
          <label className='block text-sm font-medium text-slate-700'>
            Password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-green-500 focus:outline-none'
            />
          </label>
          <button
            type='submit'
            className='w-full rounded-2xl bg-green-900 px-4 py-3 text-white transition cursor-pointer hover:bg-green-800'
          >
            Create account
          </button>
        </form>
        <p className='text-right mt-4 text-sm text-slate-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-green-900 hover:underline'>
            Log in
          </Link>
        </p>
      </div>
      
    </div>
  )
}

export default Signup