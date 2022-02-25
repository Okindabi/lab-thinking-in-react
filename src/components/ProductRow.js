import React from 'react';

const ProductRow = (props) => {
  return (
    <div>
      {props.product.name} {props.product.price}
    </div>
  );
};

export default ProductRow;
