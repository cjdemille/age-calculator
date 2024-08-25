import './BirthDateForm.css'

<<<<<<< HEAD
export default function BirthDateForm({ day, setDay, month, setMonth, year, setYear , calculateAge}) {
=======
export default function BirthDateForm({ day, setDay, month, setMonth, year, setYear , dob, setDob, calculateAge}) {
>>>>>>> 6b0897f (create age calculator function)

    const dayError = (
        (month == 2 && day > 28) ||
        ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) ||
        day > 31
    )

<<<<<<< HEAD

    
    return (
        <form action="#" className='BirthDateForm' onSubmit={(e) => calculateAge(e)}>
=======
    const submit= (e) => {
        e.preventDefault(); 
        setDob(`${year}-${month}-${day}`)
        console.log(dob);
        calculateAge(dob);
    }
    
    return (
        <form action="#" className='BirthDateForm' onSubmit={submit}>
>>>>>>> 6b0897f (create age calculator function)
            <div className="BirthDateForm__row">
            <div className="form__group">
                <label htmlFor="day" className="form__label">Day</label>
                <input type="text" id="day" name="day" className={dayError ? "form__input error" : "form__input"} value={day} onChange={(e) => setDay(e.target.value)} maxLength={2} />
            </div>
            <div className="form__group">
                <label htmlFor="month" className="form__label">Month</label>
                <input type="text" id="month" name="month" className={month > 12 ? "form__input error" : "form__input"} value={month} onChange={(e) => setMonth(e.target.value)} maxLength={2} />
            </div>
            <div className="form__group">
                <label htmlFor="year" className="form__label">Year</label>
                <input type="text" id="year" name="year" className={year > 2023 ? "form__input error" : "form__input"} value={year} onChange={(e) => setYear(e.target.value)} maxLength={4} />
            </div>
            </div>
            <button>
                <img src="../assets/images/icon-arrow.svg" className="Icon"/>
            </button>
        </form>
    )
}