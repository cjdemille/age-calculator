import './AgeDisplay.css'

export default function AgeDisplay() {
    return (
        <section className="AgeDisplay">
            <div className="DisplayLine"><span className="Result">--</span> years</div>
            <div className="DisplayLine"><span className="Result">--</span> months</div>
            <div className="DisplayLine"><span className="Result">--</span> days</div>
        </section>
    )
}