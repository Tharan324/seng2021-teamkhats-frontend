/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Screen Shot 2024-04-23 at 11.14.32 pm.png";

const NavbarInside = ({ token, setToken }) => {
    const logout = async () => {
        try {
            await axios.delete('http://localhost:3001/khats/auth/logout', {}, {
                headers: {
                    authorization: `${token}`
                }
            });
            navigate('/login')
            setToken(null);
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }
    const navigate = useNavigate();
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" className="site-logo" />
            </div>
            <div className="navbar-links-container">
                <ul>
                    <li>
                        <a onClick={() => navigate('/sales')}>Dashboard</a>
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
                        <button className="primary-button" onClick={logout}> Logout </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarInside;
