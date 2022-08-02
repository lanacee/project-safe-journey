const CountryCard = (props) => {
    return (
        <div>
            <img src="https://placeimg.com/600/400/arch" alt="random architecture" />
            <h3>{props.country.name}</h3>
        </div>
    )
}


const Countries = (props) => {
    const countryItems = props.data.map((country) => {
        return (
            <CountryCard country={country} />
        )
    })
    return (
        <div>
            {countryItems}
        </div>
    )
}

export default Countries