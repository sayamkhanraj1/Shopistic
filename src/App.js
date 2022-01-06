import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import LoginRegister from './components/LoginRegister/LoginRegister';
import ContactUs from './components/ContactUs/ContactUs';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes>
    </div>
  );
}

export default App;
