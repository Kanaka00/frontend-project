import React from 'react'
import { ShopContext } from '../../component/ShopContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrum from '../BreadCrum/BreadCrum';
import ProductDisplay from "./ProductDisplay"


const ProductPage = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_data.find((e) => e.id === Number(productId));
  

if(!product){
  return <h2>Product Not Found</h2> 
}

  return (
<div>
<BreadCrum product={product}/>
<ProductDisplay product={product}/>
</div>
     
  )
}

export default ProductPage;