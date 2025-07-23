import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div className='text-3xl font-bold text-blue-500'>
        Tailwind is working!
      </div>
    </>
  )
}

export default App
