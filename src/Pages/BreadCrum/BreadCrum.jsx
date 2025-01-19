import React from 'react';
import './BreadCrum.css';

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrumb">
      Home <i className="fa-solid fa-caret-right"></i> Shop <i className="fa-solid fa-caret-right"></i>
      {product.category} <i className="fa-solid fa-caret-right"></i> {product.name}
    </div>
  );
};

export default BreadCrum;
