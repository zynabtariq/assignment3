import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";
import {useState} from "react";

function FilterableProductTable({products}:{products: {category: string, price: string, stocked: boolean,name: string}[]}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <Searchbar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }

export default FilterableProductTable;