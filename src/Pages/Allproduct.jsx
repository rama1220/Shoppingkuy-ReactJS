import FamillyBanner from "../Components/Assets/banner_familly.jpg";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import ItemCategory from "../Components/Item/ItemCategory";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function Allproduct() {
  const { all_product } = useContext(ShopContext);
const totalProduct = all_product.reduce((acc, ) => {
  return acc + 1;
}, 0);
  return (
    <>
      <div className="banner">
        <img src={FamillyBanner} alt="" />
      </div>
      <div className="main-container">
        <Sidebar />
        <div className="cloth-category">
          <h5 className="showing">
            <span>Showing </span> 1 -{totalProduct} of the products
          </h5>
          <h2>All Clothing Products</h2>
          <div className="cloth-item-cetegory">
            {all_product.map((item, index) => {
              return <ItemCategory key={index} id={item.id} name={item.name} image={item.image} rating={item.rating} new_price={item.new_price} old_price={item.old_price} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
