import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/home';
import Editpage from './pages/editpage';


function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Editpage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
