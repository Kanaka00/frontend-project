import React from 'react';
import './Favirout.css';
import { ShopContext } from '../../component/ShopContext';
import { useContext } from 'react';

const Favirout = () => {
  const { all_data, removeToFaV, cartItem,Totalcount } = useContext(ShopContext);

  return (
    <div className="fav-container">
      {all_data.map((e) => {
        if (cartItem[e.id]) { 
          return (
            <div className='product-box' key={e.id}>
            <div className="img-box">
              <div className="remove" onClick={()=>{removeToFaV(e.id)}}>
              <i class="fa-solid fa-xmark"></i>
              </div>
              <img src={e.imgsrc} alt="" />
            </div>
            <div className="item-info">
              <h2>{e.name}</h2>
              <h3>{e.title}</h3>
              <h4>{e.old_price} <span className="strike-through">{e.new_price}</span></h4>
              <p>{e.description}</p>
            </div>
          </div>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default Favirout;
