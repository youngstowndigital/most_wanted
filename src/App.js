import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import WantedList from './containers/WantedList'
import WantedPage from './containers/WantedPage';
import WantedProvider from './context/WantedContext'

function App() {
  return (
    <WantedProvider>
      <BrowserRouter>
        <NavBar />
        <br />
        <div className="container">
        <Routes>  
          <Route exact path="/" element={ <WantedList /> } />
          <Route exact path="/:id" element={ <WantedPage /> } />
        </Routes>
        </div>
        <Footer />  
      </BrowserRouter>  
    </WantedProvider>
  )
}

export default App
