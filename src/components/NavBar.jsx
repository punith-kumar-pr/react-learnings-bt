import { Navigate, useNavigate } from "react-router-dom";
import './styles.css'

const NavBar = () => {

    const navigate =  useNavigate();
    // const history = useHistory();
    const navItems = ["Pagination", "Cart", "VisNetwork", "Infinite-scrolling"];

    const handleClick = (route) => {
        navigate(`/${route}`);
    }

    return (
        <nav className="navbar">

            <ul className="navbar-list">
                {navItems.map((item, index) => {
                    return (<li key={index} className="navbar-item navbar-link" onClick={()=>handleClick(item.toLowerCase())}>{item} </li>);
                })}
            </ul>
        </nav>
    )
}

export default NavBar
