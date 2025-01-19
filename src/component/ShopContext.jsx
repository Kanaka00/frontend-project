
import React from 'react'
import { createContext } from 'react'
import {all_data} from "../FilesData/All_Data"
import { useState } from 'react';

export const ShopContext = createContext(null);

const GetDefultCart = () => {
      let cart = [];

      for(let i=0; i < all_data.length;  i++) {

            cart[i] = 0

      }
      return cart
}



const  ShopContextProvider = (props) => {

      const addToCart =(ItemId) => {
            setCartItem ((prev)=>({...prev,[ItemId]: prev[ItemId]+1}))
      }
      const removeToCart =(ItemId) => {
            setCartItem ((prev)=>({...prev,[ItemId]: prev[ItemId]-1}))
      }

      const addToFav =(ItemId) => {
            setCartItem ((prev)=>({...prev,[ItemId]: prev[ItemId]+1}))
      }
      const removeToFaV =(ItemId) => {
            setCartItem ((prev)=>({...prev,[ItemId]: prev[ItemId]-1}))
      }


      const GettotalCartAmount = () => {
            let totalAmount = 0;
        
            for (const item in cartItem) {
                if (cartItem[item] > 0) {
                    let iteminfo = all_data.find((product) => product.id === Number(item));
                    if (iteminfo) {
                        totalAmount += iteminfo.new_price * cartItem[item];
                    }
                }
            }
            return totalAmount;
        };
const Totalcount=()=>{
      let totalAmount = 0;
      for (const item in cartItem) {
            if(cartItem[item] > 0) {
                  totalAmount += cartItem[item];

      }
      }
      return totalAmount;
};
        
      




const [cartItem, setCartItem] = useState(GetDefultCart())
  const ContextValue = {all_data,cartItem,addToCart,removeToCart,GettotalCartAmount,Totalcount,addToFav,removeToFaV}

  return (
        <ShopContext.Provider value={ContextValue}>
              {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider;
