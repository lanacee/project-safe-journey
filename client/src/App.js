import './App.css'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Carousels from './components/Carousels'
import Quotes from './components/Quotes'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Carousels />
      <Quotes />
    </div>
  )
}

export default App
