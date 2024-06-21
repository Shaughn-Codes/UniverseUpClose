import logo from './logo.svg';
import './App.css';
import ApodCard from './ApodCard';
import { MyContext,MyContextProvider } from './YourContext';

function App() {
  return (
    <div className="App">
      <ApodCard />
    </div>
    
  );
}

export default App;
