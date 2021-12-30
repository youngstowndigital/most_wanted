import './App.css';
import WantedList from './containers/WantedList';
import WantedProvider from './context/WantedContext';

function App() {
  return (
    <WantedProvider>
      <WantedList />
    </WantedProvider>
  );
}

export default App;
