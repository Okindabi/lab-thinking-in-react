import { useEffect, useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import InStock from './InStock';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(
      jsonData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <h1>IronStore</h1>
      <InStock setProducts={setProducts} />
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
