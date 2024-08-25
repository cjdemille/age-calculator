import { useState } from 'react';
import BirthDateForm from './BirthDateForm'
import AgeDisplay from './AgeDisplay';
import './App.css';

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [dob, setDob] = useState('')

  const [dispYear, setDispYear] = useState("--")
  const [dispMonth, setDispMonth] = useState("--")
  const [dispDay, setDispDay] = useState("--")

  
  const calculateAge = (dob) =>{
    dob = dob.toString();
    const today = new Date(); 
    const birthDate = new Date(dob); 
    console.log(birthDate);

    let years = today.getFullYear() - birthDate.getFullYear(); 
    let months = today.getMonth() - birthDate.getMonth(); 
    let days = today.getDate() - birthDate.getDate(); 
    
    if (months < 0) {
      years--; 
      months += 12; 
    }
    if(days < 0){
      months--; 
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
       days +=lastMonth.getDate(); 
    }

    setDispDay(days)
    setDispMonth(months)
    setDispYear(years)
  }

  return (
    <div className='App'>
      <BirthDateForm day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} dob={dob} setDob ={setDob} calculateAge={calculateAge}/>
      <AgeDisplay dispYear={dispYear} dispMonth={dispMonth} dispDay={dispDay}/>
    </div>
  )
}

export default App
