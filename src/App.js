import './App.css';
import ProductCard from './components/ProductCard';
import LandingPage from './views/LandingPage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import HomePage from './views/HomePage';
import SelectedBikeForm from './views/SelectedBikeForm';
import Order from './views/Order';
import AdminHome from './adminViews/AdminHome';
import AdminStatsPanel from './adminViews/AdminStatsPanel';
import AdminBikePanel from './adminViews/AdminBikePanel';
import AdminOrderPage from './adminViews/AdminOrderPage';


function App() {
  return (
    <div className="app">
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/form" element={<SelectedBikeForm/>}/>
    <Route path="/admin/login" element={<LoginPage/>}/>
    <Route path="/admin/signup" element={<SignupPage/>}/>
    <Route path="/admin/home" element={<AdminHome/>}/>
    <Route path="/admin/order" element={<AdminOrderPage/>}/>
    <Route path="/admin/form" element={<SelectedBikeForm/>}/>
    <Route path="/admin/stats" element={<AdminStatsPanel/>}/>
    <Route path="/admin/bike" element={<AdminBikePanel/>}/>
    </Routes>
      
      {/* <ProductCard/> */}
    </div>
  );
}

export default App;
