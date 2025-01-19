// import React from 'react'
// import "./Item.css"
// import { Link } from 'react-router-dom';

// const Item = (props) => {
//   return (
//     <div className='product-box'>
//       <div className="img-box">
// <Link to={`/product/${props.id}`} >
//   <img src={props.img} alt={props.description} />
//   </Link>
//       {  console.log('Product ID:', props.id)}

//       </div>
//       <div className="item-info">
//         <h2>{props.name}</h2>
//         <h3>{props.title}</h3>
//         <h4>{props.old_price} <span className="strike-through">{props.new_price}</span></h4>
//         <p>{props.description}</p>

//       </div>
//     </div>
//   )
// };


// export default Item;


import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='product-box'>
      <div className="img-box">
        <Link to={`/product/${props.id}`}>
          <img src={props.img} alt={props.description} onClick={window.scroll(0,0)}/>
        </Link>
      </div>
      <div className="item-info">
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <h4>{props.old_price} <span className="strike-through">{props.new_price}</span></h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Item;
