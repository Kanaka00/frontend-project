import React, {  useState } from 'react'
import "./Product.css"
import { shirtpopular} from '../../FilesData/All_Data';
import Item from '../../component/Item';

// {all_data,cartItem,addToCart,removeToCart}

import { ShopContext}from "../../component/ShopContext"
import { useContext } from 'react';





const ProductDisplay = (props) => {

  const [active,setactive] = useState(false)

  const handleclick =()=>{
    if(!active) {
      setactive(true);
      addToFav(product.id)
      console.log('addfavorite:', product.id)
    }
    else{
      setactive(false)
      removeToFaV(product.id);
      console.log("removefavorite:", product.id)
    }
  };




  const {addToCart,addToFav,removeToFaV} = useContext(ShopContext)

const {product} = props;

  return (
    <div className='ProductDisplay'>
      <div className="product-img">
        <div className="left-box">
           <div className='img-item'>
           <div className="img-ralated">
            <img src={product.imgsrc} alt="" />
            <img src={product.imgsrc} alt="" />
            <img src={product.imgsrc} alt="" />
            <img src={product.imgsrc} alt="" />
            <img src={product.imgsrc} alt="" />
      </div>
       <div className="main-img">
       <img src={product.imgsrc} alt="" />
       <div
       onClick={handleclick}
       className={active?"heart-active":"heart-inactive"}>
        <i class="fa-solid fa-heart"></i>
       </div>
       </div>
           </div>
                <div className="button-buy">
                     <input type="button" value="PAY WITH EMI" className='emi'/>
                     <input type="button" value="BUY NOW" className='buy' onClick={()=>addToCart(product.id)}/>
                </div>
          </div>

          <div className="right-box">
                 <h4>{product.name}</h4> 
                 <h3>₹ <span className='old-price'>{product.old_price}</span> <span className='new-price'>{product.new_price}</span></h3>
                  <div className="size">
                    <ul>
                      <li>S</li>
                      <li>M</li>
                      <li>L</li>
                      <li>XL</li>
                      <li>XXL</li>
                    </ul>
                  </div>
                  <div className="stars">
                    <ul>
                      <li className='gold'>  <i class="fa-solid fa-star"></i></li>
                      <li className='gold'>  <i class="fa-solid fa-star"></i></li>
                      <li className='gold'>  <i class="fa-solid fa-star"></i></li>
                      <li className='gold'>  <i class="fa-solid fa-star"></i></li>
                      <li>  <i class="fa-solid fa-star"></i></li>
                        
                       

                    </ul>
                  </div>

                  <div className="green-tag">
                    <h2>Available offers</h2>
                    <ul>
                      <li>
                      <i class="fa-solid fa-tag"></i>
                        <span>Bank offers</span>
                        5% Unlimited CashBack Credit Card
                      </li>
                      <li>
                      <i class="fa-solid fa-tag"></i>
                        <span>Bank offers</span>
                        10% Unlimited CashBack Rupay Card
                      </li>
                      <li>
                      <i class="fa-solid fa-tag"></i>
                        <span>Bank offers</span>
                        15% Unlimited CashBack Axis Card
                      </li>
                      <li>
                      <i class="fa-solid fa-tag"></i>
                        <span>Bank offers</span>
                        5% Unlimited CashBack Sumo Card
                      </li>
                      
                    </ul>
                  </div>
                  <div className="discription">
                    <h2>Product Description</h2>
                    <p>
                    This premium-quality shirt and pant set is designed for style and comfort. The shirt, crafted from breathable cotton, features a modern fit with a classic button-up design, making it suitable for all occasions. The pants are tailored from stretchable fabric, offering flexibility and a polished look, ideal for formal or casual wear. Together, they create a perfect outfit for any setting.
                    </p>
                  </div>

          </div>
          </div>


          <div className="container">
              {shirtpopular.map((item,i)=>{
                return(
                  <Item
                key={i}
                id= {item.id}
                img={item.imgsrc}
                title={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
                description={item.description}
                />
                )
              })}
          </div>
    </div>
  )
}

export default ProductDisplay
