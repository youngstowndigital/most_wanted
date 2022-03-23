import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import WantedList from './containers/WantedList'
import WantedPage from './containers/WantedPage';
import WantedProvider from './context/WantedContext'

function App() {
  return (
    <WantedProvider>
      <BrowserRouter>
        <NavBar />
        <main className="flex-shrink-0">
          <div className="container my-5">
          <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/wanted" element={ <WantedList /> } />
            <Route exact path="/wanted/:id" element={ <WantedPage /> } />
          </Routes>
          </div>
        </main>
        <Footer />  
      </BrowserRouter>  
    </WantedProvider>
  )
}

export default App
