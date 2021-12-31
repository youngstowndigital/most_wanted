import './App.css'
import NavBar from './components/NavBar'
import WantedList from './containers/WantedList'
import WantedProvider from './context/WantedContext'

function App() {
  return (
    <WantedProvider>
      <NavBar />
      <br />
      <div className="container">
        <WantedList />
      </div>
    </WantedProvider>
  )
}

export default App
