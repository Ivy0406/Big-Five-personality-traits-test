import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"

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
