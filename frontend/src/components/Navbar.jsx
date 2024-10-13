import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineAddCircleOutline } from "react-icons/md";
import { useTheme } from "../ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`nav-bar ${theme === "light" && "nav-light"}`}>
      <NavLink className="logo" to="/">
        Product store
      </NavLink>
      <div className="nav-bar-links">
        <NavLink to="/create">
          <button className={`icon-btn ${theme === "light" && "icon-btn-light"}`} role="link">
            <MdOutlineAddCircleOutline className="icon" />
          </button>
        </NavLink>
        <div>
          <button
            className={`icon-btn ${theme === "light" && "icon-btn-light"}`}
            onClick={() => toggleTheme()}
          >
            <MdOutlineLightMode className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
