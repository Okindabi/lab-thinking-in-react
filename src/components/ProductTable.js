import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <h4>Name and Price</h4>
      {props.products.map((product) => {
        return <ProductRow product={product} />;
      })}
    </div>
  );
};

export default ProductTable;
