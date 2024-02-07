import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import { useSearch } from "../../Context/SearchContext";
import Item from "../Item/Item";
import InputComponent from "../Input/InputComponent";

export default function Search() {
  const { searchTerm } = useSearch();
  const { all_product } = useContext(ShopContext);

  const data = all_product.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <InputComponent />
      <div className="cloth-container">
        <h5 className="showing">
          <span>{data.length} - </span> search results for product
        </h5>
        <div className="cloth-item">
          {data.length > 0 ? data.map((item, index) => <Item key={index} id={item.id} name={item.name} image={item.image} rating={item.rating} new_price={item.new_price} old_price={item.old_price} />) : <h2>Product Not Found</h2>}
        </div>
      </div>
    </>
  );
}
