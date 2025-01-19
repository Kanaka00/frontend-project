import React from 'react'
import { ShopContext } from '../../component/ShopContext'
import { useContext } from 'react'
import "./Cart.css"
import Item from '../../component/Item'
import {pantspopular} from "../../FilesData/All_Data"


const Cart = () => {
 

  const {all_data,cartItem,Totalcount,removeToCart,GettotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartpage'>

      <div className="cart-left">
        <div className="cart-head">
          <h1>Shopping Cart</h1>
          <h3>price</h3>
        </div>
        {all_data.map((e)=>{
          if(cartItem[e.id]>0){
           return(
            <div className="cart-body">
            <div className="img-detailes">
            <div className='cart-img-box'>
       <img src={e.imgsrc} alt="" />
       </div>
      <div className='stock'>
      <h3>{e.name}</h3>
       <p className='stock-name' >In Stock</p>
       <p className='shipping' >Eligiblel for Free Shipping <span className='contact'>constct for more detailes</span></p>
       <p className='qantity'>
         <p>{cartItem[e.id]}</p>
       </p>
       <button className='delete' onClick={()=>{removeToCart(e.id)}}>
       <p>Delete <span><i class="fa-solid fa-circle-xmark"></i></span></p>
       </button>
      </div>
            </div>
       <div className="value">
       <p>₹<span className='new-price'>{e.new_price}</span></p>
       <p>MRP<span className='old-price'>{e.old_price}</span></p>
       </div>
      </div>
           )
          }
        })}
           <div className="cart-bottom">
            <p>Subtract <span className='count'>{Totalcount()}</span>items: ₹ <span className='total-price'>{GettotalCartAmount()}</span></p>
           </div>

         
      </div>
      <div className="cart-right">
        <div className="buying">
          <button>
            Proced To Buy <i class="fa-solid fa-caret-right"></i>
          </button>
        </div>
        <div className="related-product">


     
              {pantspopular.map((item, i) =>(
        <Item 
        key={i}
        id= {item.id}
        img={item.imgsrc}
        title={item.name}
        old_price={item.old_price}
        new_price={item.new_price}
        description={item.description}/>
      ))}







        </div>

      </div>

        
      
    </div>
  )
}

export default Cart








{/* <div className="cart-body">
<div className="img-detailes">
<div className='cart-img-box'>
<img src="" alt="" />
</div>
<div className='stock'>
<h3>product name</h3>
<p className='stock-name' >In Stock</p>
<p className='shipping' >Eligiblel for Free Shipping <span className='contact'>constct for more detailes</span></p>
<p className='qantity'>
<p>1</p>
</p>
<button className='delete'>
<p>Delete <span><i class="fa-solid fa-circle-xmark"></i></span></p>
</button>
</div>
</div>
<div className="value">
<p>₹<span className='new-price'>9990:00</span></p>
<p>MRP<span className='old-price'>91990:00</span></p>
</div>
</div> */}
