import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Blogs from './components/Home/Blogs/Blogs';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        
      </Routes>
    </div>
  );
}

export default App;
