// import logo from './logo.svg';
// import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route  } from 'react-router-dom';
import data from "./data/db.json"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home tours={data}/>} />
          <Route path="/city/:id" element={<TourDetails tours={data}/>} />
        </Routes>
    </>
  );
}

export default App;
