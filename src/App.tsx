import { useState } from 'react'

function App() {
  const [timeLeft, setTimeLeft] = useState<number>(300); 
  const [selectedMinutes, setSelectedMinutes] = useState<number>(5);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Focus</h1>
      
      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 border-8 border-red-500 rounded-full flex items-center justify-center mb-4">
            <span className="text-6xl font-mono">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-bold">
              {isTimerRunning ? 'Пауза' : 'Старт'}
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-bold">
              Стоп
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-4 gap-2">
          {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((min) => (
            <button 
              key={min}
              className="w-16 h-12 bg-slate-800 hover:bg-slate-700 rounded flex items-center justify-center border border-slate-700"
            >
              {min}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App