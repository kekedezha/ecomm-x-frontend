import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "@/pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* NavBar component */}
      <Navbar />

      {/* Pages */}
      <main className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
