const QuoteItem = () => {
    return (
        <div className="quote">
            <h4>"</h4>
            <p>Nulla facilisi. Phasellus sed blandit est, ut maximus purus. Praesent.</p>
        </div>
    )
}

const Quotes = () => {
    return (
        <div>
            <h3>What our users say</h3>
            <QuoteItem />
            <QuoteItem />
            <QuoteItem />
        </div>
    )
}

export default Quotes