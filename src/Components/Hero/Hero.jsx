import BigPict from ".././Assets/land2.jpg";
import sembilanSale from "../Assets/sale99.jpg";
import duabelasSale from "../Assets/sale1212.jpg";
import Button from "../Button/Button";
import InputComponent from "../Input/InputComponent";
export default function Hero() {
  return (
    <>
      <InputComponent />
      <div className="hero">
        <div className="hero-left">
          <img src={BigPict} alt="" />
        </div>
        <div className="hero-right">
          <div className="sale">{<img src={sembilanSale} alt="" />}</div>
          <div className="promo">
            <img src={duabelasSale} alt="" />
          </div>
        </div>
      </div>
      <div className="btn-group">
        <Button value={"Local Product"} />
        <Button value={"Free Shipping"} />
        <Button value={"All Size Clothes"} />
        <Button value={"Accessories"} />
        <Button value={"Cash on Delivery"} />
      </div>
    </>
  );
}
