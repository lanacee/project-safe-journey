import NavBar from "./NavBar"
import Search from "./Search"
import Carousels from "./Carousels"
import Quotes from "./Quotes"



const Home = (props) => {
    return (
        <div>
            <NavBar />
            <Search />
            <Carousels />
            <Quotes />
            <hr />
            <footer className="footer">Contact Us: foobar@gmail.com</footer>
        </div>
    )
}

export default Home