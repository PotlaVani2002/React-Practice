import { Link } from "react-router-dom";
import logo from "../../assets/react.svg"; 
import './Navbar.css'
function Navbar() {
  return (
    <div className="header">
      <div className="logo">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="links">
        <ul className="list">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sample">Register</Link></li>
          {/* <li><Link to="/About">About</Link></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
