/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../Assets/Screen Shot 2024-04-23 at 11.14.32 pm.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" className="site-logo"/>
      </div>
      <div className="navbar-links-container">
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/create'>Create</a>
          </li>
          <li>
            <a href='/validate'>Validate</a>
          </li>
          <li>
            <a href='/send'>Send</a>
          </li>
          <li>
            <a className="primary-button" href='/sales'>Sales</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
