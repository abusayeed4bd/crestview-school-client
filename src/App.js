import logo from './logo.svg';
import './App.css';
import Navbar from './shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './shared/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
