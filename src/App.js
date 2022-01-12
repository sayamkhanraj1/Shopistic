import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Blog1 from './components/Home/Blog/Blog1/Blog1';
import Blog2 from './components/Home/Blog/Blog2/Blog2';
import Blog3 from './components/Home/Blog/Blog3/Blog3';
import LoginRegister from './components/LoginRegister/LoginRegister';
import ContactUs from './components/ContactUs/ContactUs';
// import CheckOutForm from './components/DashBord/Payment/CheckOutForm/CheckOutForm';
import Products from './Shop/Shop/Products'
import SingleProduct from './Shop/Shop/SingleProduct/SingleProduct';
import Error from './components/Error/Error';
import DashBord from './components/DashBord/DashBord/DashBord';
import AddProduct from './components/DashBord/AddProduct/AddProduct';
import MakeAdmin from './components/DashBord/MakeAdmin/MakeAdmin';
import MyOrder from './components/DashBord/MyOrder/MyOrder';
import AllOrders from './components/DashBord/AllOrders/AllOrders';
import Payment from './components/DashBord/Payment/Payment';
import Review from './components/DashBord/Review/Review';
import ManegeAllProducts from './components/DashBord/ManegeAllOrders/ManegeAllProducts';
import PrivateRoute from './components/LoginRegister/PrivateRoute/PrivateRoute'
import Navblogs from './components/Navblogs/Navblogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Navblogs />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />  
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/checkout" element={<CheckOut />} /> */}
        <Route path="/moreproduct" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path="/moreproduct/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>} />
        <Route path="/dashbord" element={<PrivateRoute><DashBord/></PrivateRoute>}> 

        <Route exact path={'/dashbord'} element={<MyOrder />} />
              
              <Route path={`/dashbord/makeAdmin`} element={<MakeAdmin></MakeAdmin>} />
                     
              <Route path={`/dashbord/allorders`} element={<AllOrders />} />
                     
              <Route path={`/dashbord/addproduct`} element={ <AddProduct />} /> 
   
              <Route path={`/dashbord/manageAllOrders`} element={ <ManegeAllProducts /> } />
                     
              <Route path={`/dashbord/review`} element={ <Review /> } />
   
          <Route path={`/dashbord/pay`} element={<Payment />} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
      
    </div>
  );
}

export default App;
