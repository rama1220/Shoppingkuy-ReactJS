import men from "../Assets/men.jpg";
import women from "../Assets/women.jpg";
import kids from "../Assets/kids.jpg";
import family from "../Assets/family.jpg";
import { Link } from "react-router-dom";


export default function ModelCaption() {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <>
      <div className="caption-container">
        <h2>Life Style</h2>
        <div className="box-style">
          <Link to="/men" onClick={handleClick}>
            <img src={men} alt="" />
          </Link>
          <Link to="/women" onClick={handleClick}>
            <img src={women} alt="" />
          </Link>
          <Link to="/kid" onClick={handleClick}>
            <img src={kids} alt="" />
          </Link>
          <img src={family} alt="" />
        </div>
      </div>
    </>
  );
}

