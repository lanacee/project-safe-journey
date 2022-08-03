const QuoteItem = (props) => {
    return (
        <div className="quote">
            <h1 className="quotemarks">"</h1>
            <p>{props.quote}</p>
            <img className="references" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1659352709~exp=1659353309~hmac=8657a8e4c7b5bcfb9c7157388d4f1cf5349cd22713b04a898493bd5f15215287" alt="anonymous profile" />
        </div>
    )
}

const Quotes = () => {
    return (
        <div className="quote_container">
            <h3 className="quote_title">What our users say</h3> 
            <QuoteItem quote="I was a solo female traveller in South America and found Brazil quite scary - I didn’t feel safe even in busy places during the day."/>
            <QuoteItem quote="Some of my friends said Vietnam wasn’t LGBTQI+ traveller friendly but I had a great experience!"/>
            <QuoteItem quote="As a person of colour I experienced quite a lot of racism in Italy and never really felt welcome."/>
        </div>
    )
}

export default Quotes