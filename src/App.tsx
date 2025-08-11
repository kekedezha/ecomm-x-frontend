import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "@/pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* NavBar component */}
      <Navbar />

      {/* Pages */}
      <main className="bg-white shadow-xl rounded-b-2xl p-8 min-h-screen relative z-10 mb-[740px] md:mb-[490px]">
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
