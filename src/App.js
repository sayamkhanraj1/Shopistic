import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Blogs from './components/Home/Blogs/Blogs';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Blog1 from './components/Home/Blog/Blog1/Blog1';
import Blog2 from './components/Home/Blog/Blog2/Blog2';
import Blog3 from './components/Home/Blog/Blog3/Blog3';
import LoginRegister from './components/LoginRegister/LoginRegister';
import ContactUs from './components/ContactUs/ContactUs';
import CheckOut from './components/Checkout/Checkout';
import Products from './Shop/Shop/Products';
import SingleProduct from './Shop/Shop/SingleProduct/SingleProduct';
import Error from './components/Error/Error';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog1" element={<Blog1 />} />
        <Route path="blog2" element={<Blog2 />} />
        <Route path="blog3" element={<Blog3 />} />  
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/moreproduct" element={<Products />} />
        <Route path="/moreproduct/:id" element={<SingleProduct/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
