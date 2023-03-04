import './App.css';
import ProductCard from './components/ProductCard';
import LandingPage from './views/LandingPage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import HomePage from './views/HomePage';
import SelectedBikeForm from './views/SelectedBikeForm';
import Order from './views/Order';


function App() {
  return (
    <div className="app">
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/form" element={<SelectedBikeForm/>}/>
    <Route path="/order" element={<Order/>}/>
    </Routes>
      
      {/* <ProductCard/> */}
    </div>
  );
}

export default App;
