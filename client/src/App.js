import './App.css'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Carousel from './components/Carousel'
import Quotes from './components/Quotes'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Carousel />
      <Quotes />
    </div>
  )
}

export default App
