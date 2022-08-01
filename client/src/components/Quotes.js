const QuoteItem = () => {
    return (
        <div className="quote">
            <h1 className="quotemarks">"</h1>
            <p>Nulla facilisi. Phasellus sed blandit est, ut maximus purus. Praesent.</p>
            <img className="references" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1659352709~exp=1659353309~hmac=8657a8e4c7b5bcfb9c7157388d4f1cf5349cd22713b04a898493bd5f15215287" alt="anonymous profile" />
        </div>
    )
}

const Quotes = () => {
    return (
        <div className="quote_container">
            <h3 className="quote_title">What our users say</h3> 
            <QuoteItem />
            <QuoteItem />
            <QuoteItem />
        </div>
    )
}

export default Quotes