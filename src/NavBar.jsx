import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Search from './assets/icons/magnifying-glass-solid (1).svg'
import { ShopContext } from './component/ShopContext'
import { useContext } from 'react'

const NavBar = () => {


  

  const{Totalcount} = useContext(ShopContext);
  const [menu,setMenu] = useState("shop")
  const [showMenu,setShowmenu] = useState(false)

  const TogleMenu = () =>{

    setShowmenu(!showMenu)

  }
  const closeMenu = () =>{
    setShowmenu(false)
  }



  return (
    <div className='nav'> 
        <div className="help-desk">
        <ul>
          <li>App Downlode</li>
          <li>Help Desk</li>
          <li>Customer Care</li>
        </ul>
        </div>
      
      <div className="nav-bar">
        <div className="logo">
          <h2>Fastion Desk</h2>
        </div>
        <div className="nav-profiles">
          <ul>

              <Link to="login" >
              <li >
                <i class="fa-solid fa-sign-in-alt"></i>
              </li>
              </Link>
            <Link to="favriout">
            <li><i class="fa-solid fa-heart"></i></li>
            </Link>
           <Link to="cart">
           <li><i class="fa-solid fa-cart-shopping"></i>
           <span className='notify'>{Totalcount()}</span></li>
           </Link>
          </ul>
        </div>
        
      </div>

      <div className="nav-pages">
      <div className="bars" onClick={TogleMenu}>
      <i className="fa-solid fa-bars"></i>
      </div>
  <ul className={showMenu ? "show" : ""}>
    <Link to="/" onClick={closeMenu}>
      <li onClick={() => { setMenu("shop"); }}>
        Shop
      </li>
      {menu === "shop" && <hr />}
    </Link>
    <Link to="mens" onClick={closeMenu}>
      <li onClick={() => { setMenu("mens"); }}>
        MalePage
      </li>
      {menu === "mens" && <hr />}
    </Link>
    <Link to="womens"onClick={closeMenu}>
      <li onClick={() => { setMenu("women"); }}>
        FemalePage
      </li>
      {menu === "women" && <hr />}
    </Link>
    <Link to="child"onClick={closeMenu}>
      <li onClick={() => { setMenu("child"); }}>
        Child
      </li>
      {menu === "child" && <hr />}
    </Link>
    
  </ul>
</div>

    </div>
  )
}

export default NavBar






