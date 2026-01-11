import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
