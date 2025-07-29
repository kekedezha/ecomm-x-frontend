import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import Home from "@/pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </>
  )
}

export default App
