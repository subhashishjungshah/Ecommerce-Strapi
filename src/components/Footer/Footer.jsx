import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            excepturi aspernatur sint! Quibusdam provident consequatur culpa
            totam repudiandae hic eaque.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Deuba Chowk, Budanilkantha, Nepal, 68808</div>
          </div>
        </div>
        <div className="col">
          <div className="title">About</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Deuba Chowk, Budanilkantha, Nepal, 68808</div>
          </div>
        </div>
        <div className="col">
          <div className="title">About</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Deuba Chowk, Budanilkantha, Nepal, 68808</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
