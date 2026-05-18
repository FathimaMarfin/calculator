import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    console.log('Login form submitted', { username, password })
    

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const result = await response.json()
      if (!response.ok) {
        setError(result.error || 'Login failed')
        return
      }

      console.log('Login successful', result)
      localStorage.setItem('authToken', result.token)
      navigate('/calculator')
    } catch (fetchError) {
      console.error('Login error:', fetchError)
      setError('Unable to reach server')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
      <div className='w-full max-w-md rounded-3xl bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-center text-3xl font-bold text-green-900'>Login</h1>
        {error && (
          <div className='mb-4 rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-700'>{error}</div>
        )}
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
            className='w-full rounded-2xl bg-green-900 cursor-pointer px-4 py-3 text-white transition hover:bg-green-800'
          >
            Sign in
          </button>
        </form>
        <p className='text-right mt-4 text-sm text-slate-600'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-green-900 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login