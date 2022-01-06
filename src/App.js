import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import LoginRegister from './components/LoginRegister/LoginRegister';
import ContactUs from './components/ContactUs/ContactUs';
import CheckOut from './components/Checkout/Checkout';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        
      </Routes>
    </div>
  );
}

export default App;
