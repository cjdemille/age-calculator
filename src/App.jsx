import { useState } from 'react';
import BirthDateForm from './BirthDateForm'
import AgeDisplay from './AgeDisplay';
import './App.css';

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  return (
    <div className='App'>
      <BirthDateForm day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} />
      {day}
      {month}
      {year}
      <AgeDisplay />
    </div>
  )
}

export default App
