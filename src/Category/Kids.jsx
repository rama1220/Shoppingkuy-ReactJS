import KidsBanner from "../Components/Assets/banner_kids.png";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import Item from "../Components/Item/Item";
import InputComponent from "../Components/Input/InputComponent";

export default function Kids() {
  const { all_product } = useContext(ShopContext);
  const totalProduct = all_product.reduce((acc, product) => {
    if (product.category === "kid") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return (
    <>
      <div className="banner">
        <img src={KidsBanner} alt="" />
      </div>
      <InputComponent />
      <div className="cloth-container">
        <h5 className="showing">
          <span>Showing </span> 1 -{totalProduct} of the products kids
        </h5>
        <div className="cloth-item">
          {all_product.map((item, index) => {
            if (item.category === "kid") {
              return <Item key={index} id={item.id} name={item.name} image={item.image} rating={item.rating} new_price={item.new_price} old_price={item.old_price} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
