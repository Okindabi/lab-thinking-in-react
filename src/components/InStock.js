import React from 'react';
import jsonData from '../data.json';

const InStock = (props) => {
  const [stock, setStock] = React.useState(false);

  React.useEffect(() => {
    stock
      ? props.setProducts(jsonData.filter((product) => product.inStock))
      : props.setProducts(jsonData);
  }, [stock]);
  return (
    <div>
      <input type="checkbox" value={stock} onChange={() => setStock(!stock)} />
    </div>
  );
};
export default InStock;
