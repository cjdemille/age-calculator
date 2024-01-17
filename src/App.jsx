import { useState } from 'react'
import BirthDateForm from './BirthDateForm'
import AgeDisplay from './AgeDisplay'
import './App.css'

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  return (
    <>
      <BirthDateForm day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} />
      {day}
      {month}
      {year}
      <AgeDisplay />
    </>
  )
}

export default App
