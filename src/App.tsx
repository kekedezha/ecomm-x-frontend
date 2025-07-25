import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import Home from "@/pages/Home";
import Shop from "./pages/Shop";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
