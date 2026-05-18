import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Calculator from './pages/Calculator.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/signup' />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/calculator' element={<Calculator />} />
    </Routes>
  )
}

export default App
