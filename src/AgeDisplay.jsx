import './AgeDisplay.css'

<<<<<<< HEAD
export default function AgeDisplay({days, months, years}) {
    return (
        <section className="AgeDisplay">
            <div className="DisplayLine"><span className="Result">{years}</span> years</div>
            <div className="DisplayLine"><span className="Result">{months}</span> months</div>
            <div className="DisplayLine"><span className="Result">{days}</span> days</div>
=======
export default function AgeDisplay({dispYear, dispMonth, dispDay}) {
    return (
        <section className="AgeDisplay">
            <div className="DisplayLine"><span className="Result">{dispYear}</span> years</div>
            <div className="DisplayLine"><span className="Result">{dispMonth}</span> months</div>
            <div className="DisplayLine"><span className="Result">{dispDay}</span> days</div>
>>>>>>> 6b0897f (create age calculator function)
        </section>
    )
}