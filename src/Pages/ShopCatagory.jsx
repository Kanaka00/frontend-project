
import { ShopContext } from "../component/ShopContext";
import { useContext } from "react"
import Item from "../component/Item";
import "./cssfiles/ShopCatagory.css"



const ShopCatagory = (props) => {
 
  const {all_data} = useContext (ShopContext);

  return (
    <div className="shopcetagory">
          <div className="homebanner">
          <img src={props.banner} alt="no imag"/>
          </div>
          <h2>Men Catagory</h2>
          <div className="container">
              {all_data.length > 0 ? (
                  all_data.map((product,i)=>{
                     if(props.category === product.category){
                       return(
                        <Item 
                        key={i}
                        id={product.id} 
                        name={product.name}
                        title={product.title}
                        old_price={product.old_price}
                        new_price={product.new_price}
                        description={product.description}
                        img={product.imgsrc}
                      />
                  
                       )
                     }
                     else{
                      return null;
                     }
                  }
              ) 
            )
              :(
                <h2>No Products Found</h2>
              )}
          </div>

    </div>
  )
}

export default ShopCatagory;
// category
