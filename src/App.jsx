import { useState } from 'react';
import BirthDateForm from './BirthDateForm'
import AgeDisplay from './AgeDisplay';
import './App.css';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ageDays, setAgeDays] = useState('--');
  const [ageMonths, setAgeMonths] = useState('--');
  const [ageYears, setAgeYears] = useState('--');

  // const [date, setDate] = useState('');

  const calculateAge = (e) =>{
    e.preventDefault();
    const dayNumber = Number(day) +1;
    const inputDate = new Date(`${year}-${month}-${dayNumber}`)
    const currentDate = new Date(); 


    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth(); 
    let days = currentDate.getDate() - inputDate.getDate();
    
    if(days < 0) {
      months -= 1;
      const previousMonth = new Date(currentDate.getFullYear, currentDate.getMonth() , 0);
      days += (previousMonth.getDate() + 1);
    }

    if(months < 0) {
      years -= 1; 
      months +=12;
    }




    setAgeYears(years);
    setAgeDays(days);
    setAgeMonths(months);
    // 

    setDay('');
    setMonth('');
    setYear('');
  }

 


  


  

  return (
    <div className='App'>
      <BirthDateForm day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} calculateAge = {calculateAge}/>
 
      <AgeDisplay days ={ageDays} months = {ageMonths} years = {ageYears}/>
    </div>
  )
}

export default App
