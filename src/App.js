import './App.css';
import WantedList from './containers/WantedList';
import WantedProvider from './context/WantedContext';

function App() {
  return (
    <WantedProvider>
      <div className="container">
        <WantedList />
      </div>
    </WantedProvider>
  );
}

export default App;
