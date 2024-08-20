import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <div>
    <NavBar/>
    <ItemListContainer greeting="Hola Mundo Cruel!" />
    <Footer/>
    </div>
    </>
  )
}

export default App
