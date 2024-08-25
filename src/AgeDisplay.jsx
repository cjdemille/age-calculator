import './AgeDisplay.css'

export default function AgeDisplay({dispYear, dispMonth, dispDay}) {
    return (
        <section className="AgeDisplay">
            <div className="DisplayLine"><span className="Result">{dispYear}</span> years</div>
            <div className="DisplayLine"><span className="Result">{dispMonth}</span> months</div>
            <div className="DisplayLine"><span className="Result">{dispDay}</span> days</div>
        </section>
    )
}