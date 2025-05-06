import './App.css';
import Header from './components/Header';
import NavigationHeader from './components/NavigationHeader';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Cloud Computing Lab 13</h1>
      <Header myName="Nouman" />
      <h1>Navigation Header</h1>
      <NavigationHeader />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
