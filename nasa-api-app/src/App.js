import logo from './logo.svg';
import './App.css';
import ApodCard from './ApodCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyContext,MyContextProvider } from './YourContext';
import LandingPage from './LandingPage.js';
import ApodDate from './ApodDate';

function App() {
  return (
 <Router>
  <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/today' element={<ApodCard date={new Date().toISOString().split('T')[0]}/>} />
    <Route path='/:date' element={<ApodDate />}/>
  </Routes>
 </Router>
  );
};

export default App;
