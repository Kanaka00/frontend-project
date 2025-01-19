import { Route, Router,Routes } from "react-router-dom";
import NavBar from "./NavBar";
import LandingPage from "./Pages/LandingPage";
import ShopCatagory from "./Pages/ShopCatagory"
import LoginPage from "./Pages/LoginPage/LoginPage";

import Location from "./Pages/location/Location";
import Favirout from "./Pages/Favroits/favirout";
import Cart from "./Pages/Cart/Cart"
import ProductPage from "./Pages/Product/ProductPage";
import menbanner from "./assets/Banners/MenBanner.jpg"
import womenbanner from "./assets/Banners/womenBanner.jpg"
import kidsbanner from "./assets/Banners/kidsBanner.jpg"
import Footer from "./Pages/Footer/Footer";
import RegistrationPage from "./Pages/LoginPage/RegistrationPage";
import "./App.css"

const App = () =>{
  return(
  <>

     <NavBar/>
  <div>

       <Routes>
       <Route path="/" element={<LandingPage />} />
<Route path="mens" element={<ShopCatagory banner={menbanner} category="Male" />} />
<Route path="womens" element={<ShopCatagory banner={womenbanner} category="Female" />} />
<Route path="child" element={<ShopCatagory banner={kidsbanner} category="child" />} />
<Route path="login" element={<LoginPage />} />
<Route path="location" element={<Location />} />
<Route path="favriout" element={<Favirout />} />
<Route path="cart" element={<Cart />} />
<Route path="product/:productId" element={<ProductPage />} /> 
<Route path="registration" element={<RegistrationPage />} />
<Route path="login"  element={<LoginPage/>}/>


       </Routes>
  </div>
  <Footer/>
  </>
  )
}

export default App;