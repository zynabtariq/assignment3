function Searchbar({filterText,inStockOnly,onFilterTextChange,onInStockOnlyChange}:{filterText:string,inStockOnly:boolean,onFilterTextChange:any,onInStockOnlyChange:any} ) {
    return (
      <form>
        <input className="search"
          type="text" 
          value={filterText} placeholder="Search" 
          onChange={(e) => onFilterTextChange(e.target.value)} /><br></br>
        <label>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
export default Searchbar;