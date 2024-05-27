import './AgeDisplay.css'

export default function AgeDisplay({days, months, years}) {
    return (
        <section className="AgeDisplay">
            <div className="DisplayLine"><span className="Result">{years}</span> years</div>
            <div className="DisplayLine"><span className="Result">{months}</span> months</div>
            <div className="DisplayLine"><span className="Result">{days}</span> days</div>
        </section>
    )
}