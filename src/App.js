import './App.css';
import ProductCard from './components/ProductCard';
import LandingPage from './views/LandingPage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';


function App() {
  return (
    <div className="app">
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    </Routes>
      
      {/* <ProductCard/> */}
    </div>
  );
}

export default App;
