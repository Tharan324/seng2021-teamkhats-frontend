/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Screen Shot 2024-04-23 at 11.14.32 pm.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" className="site-logo"/>
      </div>
      <div className="navbar-links-container">
        <ul>
          <li>
            <a onClick={() => navigate('/')}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate('/create')}>Create</a>
          </li>
          <li>
            <a onClick={() => navigate('/validate')}>Validate</a>
          </li>
          <li>
            <a onClick={() => navigate('/send')}>Send</a>
          </li>
          <li>
            <a onClick={() => navigate('/sales')}>Sales</a>
          </li>
          <li>
            <a onClick={() => navigate('/login')} className="primary-button"> Login </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
