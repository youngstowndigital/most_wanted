import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
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
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={ <WantedList /> } />
          </Routes>
        </BrowserRouter>
      </div>    
    </WantedProvider>
  )
}

export default App
