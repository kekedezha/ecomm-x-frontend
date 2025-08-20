import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* NavBar component */}
      <Navbar />

      {/* Pages */}
      <main className="bg-white shadow-xl rounded-b-2xl p-8 min-h-screen relative z-10 mt-4 mb-[740px] md:mb-[490px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Toaster position="top-center" expand={true} richColors />

      {/* Footer */}
      <Footer />
    </div>

  )
}

export default App
