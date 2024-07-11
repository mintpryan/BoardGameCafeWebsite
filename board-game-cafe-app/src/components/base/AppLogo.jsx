import logo from "../../assets/Logo.png";
import { Icon } from "../../styles/styles";
import { Link } from "react-router-dom";

export default function AppLogo({ size }) {
  return (
    <Link to="/" rel="noopener noreferrer">
      <Icon src={logo} className={size}></Icon>
    </Link>
  );
}
