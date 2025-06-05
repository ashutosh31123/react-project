import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('red');

  return (
    <div className={`h-screen w-full transition-colors duration-200 `} style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center px-3 py-2'>
        <button className='bg-blue-500 px-4 py-1  m-10  rounded-full' onClick={() => setColor('blue')}>Blue</button>
        <button className='bg-yellow-500 px-4 py-1 m-10  rounded-full' onClick={() => setColor('yellow')}>Yellow</button>
        <button className='bg-green-500 px-4 py-1 m-10 rounded-full' onClick={() => setColor('green')}>Green</button>
        <button className='bg-purple-500 px-4 py-1 m-10 rounded-full' onClick={() => setColor('purple')}>Purple</button>
        <button className='bg-violet-500 px-4 py-1 m-10 rounded-full' onClick={() => setColor('violet')}>Violet</button>
        <button className='bg-gray-500 px-4 py-1 m-10 rounded-full' onClick={() => setColor('gray')}>Grey</button>
      </div>
    </div>
  )
}

export default App
