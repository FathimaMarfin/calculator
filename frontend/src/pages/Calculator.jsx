import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Calculator() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('calcHistory')
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory))
      }
    } catch (error) {
      console.error('Failed to load history:', error)
    }
  }, [])

  const persistHistory = (nextHistory) => {
    setHistory(nextHistory)
    localStorage.setItem('calcHistory', JSON.stringify(nextHistory))
  }

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value)
  }

  const handleClear = () => {
    setInput('')
  }

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      const expression = input.trim()
      if (!expression) {
        return
      }
      // eslint-disable-next-line no-eval
      const result = eval(expression).toString()
      setInput(result)
      const nextHistory = [...history, { expression, result }]
      persistHistory(nextHistory)
    } catch (error) {
      setInput('Error')
    }
  }

  const handleLogout = () => {
    navigate('/login')
  }

  const clearHistory = () => {
    persistHistory([])
  }

  return (
        <div className='h-screen w-screen bg-beige-300 mt-10  text-green-900 '>
      
      <div className='  flex justify-center  p-10  items-center'>
        <div className='container rounded-3xl bg-green-200 w-[55vh] h-[80vh]'>
          <div className='p-4 bg-green-100 w-full h-[15vh] mt-5 flex justify-between items-center rounded-4xl text-3xl font-bold text-green-900  '>
            <span>{input || "0"}</span>
            <button
              type='button'
              onClick={handleLogout}
              className='rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700'
            >
              Logout
            </button>
          </div>
          <div className='button grid grid-cols-4 '>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10 vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer ' onClick={handleClear}>C</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10 vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={handleDelete}>DEL</button>
            <button className='hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('%')}>%</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('/')}>/</button>

            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('7')}>7</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('8')}>8</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('9')}>9</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('*')}>X</button>

            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('4')}>4</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('5')}>5</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('6')}>6</button>
            <button className='hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('-')}>-</button>

            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('1')}>1</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('2')}>2</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('3')}>3</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('+')}>+</button>

            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('0')}>0</button>
            <button className=' hover:bg-green-400 p-3 bg-green-300 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={() => handleClick('.')}>.</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' onClick={handleCalculate}>=</button>
            <button className=' hover:bg-amber-600 p-3 bg-amber-50 w-[10vh] rounded-2xl m-5 text-center text-2xl font-bold text-green-900 cursor-pointer  ' type='button' onClick={clearHistory}>
              Clear
            </button>
          </div>

          <div className='mx-5 mt-4 rounded-3xl bg-white p-4 shadow-inner'>
            <h2 className='mb-3 text-lg font-semibold text-green-900'>History</h2>
            {history.length === 0 ? (
              <p className='text-sm text-slate-600'>No history yet.</p>
            ) : (
              history.map((item, index) => (
                <div key={`${item.expression}-${index}`} className='mb-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800'>
                  <div className='font-medium text-green-900'>{item.expression}</div>
                  <div className='text-slate-600'>= {item.result}</div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

  

export default Calculator