import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/Cart";
import Admin from "./pages/Admin";
import { ToastContainer } from "react-toastify";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";
  return (
    <>
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isAdmin && <Footer />}
      <ToastContainer></ToastContainer>
    </>
  );
}

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
