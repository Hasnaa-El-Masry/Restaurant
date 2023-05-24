import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <div className={className ? className : ""}>
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
