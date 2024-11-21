import { StyledHeader, CustomSearchWrapper } from "./StyledHeader";
import { useState, useEffect, useCallback } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import Search from "antd/es/input/Search";
import { toast } from "react-toastify";
import { ReactComponent as Chat } from "../../assets/img/Chat.svg";
import { ReactComponent as Home } from "../../assets/img/Home.svg";
import { ReactComponent as Flash } from "../../assets/img/Flash.svg";
import { ReactComponent as Video } from "../../assets/img/Video.svg";
import { ReactComponent as Account } from "../../assets/img/Account.svg";
import { ReactComponent as Shop } from "../../assets/img/Shop.svg";
import { ReactComponent as Alert } from "../../assets/img/Alert.svg";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";
import avatar from "../../assets/img/avatar.jpg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { debounce } from "lodash";
import { fetchProducts, resetProducts } from "../../Redux/Actions/ProductActions";
const Header: React.FC<Partial<any>> = (props) => {
  const location = useLocation(); // Get the current location
  const [query, setQuery] = useState(""); // State to hold the search query
  const dispatch = useDispatch<AppDispatch>(); // Use dispatch with AppDispatch

  // Handle change in the search input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // Update the query state

    dispatch(resetProducts()); // Reset products state before fetching new data
    dispatch(fetchProducts(value, 0)); // Fetch products with the new query
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <StyledHeader>
      <div className="left">
        <CustomSearchWrapper>
        <Search
            className="custom-search"
            placeholder="Start typing to search..."
            style={{
              width: 350,
            }}
            size="large"
            onChange={handleChange} // Set the query when typing
            value={query} // Bind the search input to the state
          />
        </CustomSearchWrapper>
        <div className="header-toolbar">
          <NavLink to="/home" className={`header-toolbar-item ${isActive("/home") ? "active" : ""}`}>
            <Home className="item" />
          </NavLink>
          <NavLink to="/stories" className={`header-toolbar-item ${isActive("/stories") ? "active" : ""}`}>
            <Flash className="item" />
          </NavLink>
          <NavLink to="/videos" className={`header-toolbar-item ${isActive("/videos") ? "active" : ""}`}>
            <Video className="item" />
          </NavLink>
          <NavLink to="/groups" className={`header-toolbar-item ${isActive("/groups") ? "active" : ""}`}>
            <Account className="item" />
          </NavLink>
          <NavLink to="/shops" className={`header-toolbar-item ${isActive("/shops") ? "active" : ""}`}>
            <Shop className="item" />
          </NavLink>
        </div>
      </div>
      <div className="right">
        <div className="icon-header">
          <Alert />
        </div>
        <div className="icon-header">
          <Chat />
        </div>
        <div className="icon-header">
          <Moon />
        </div>
        <Link to="#" className="btn-right-header ">
          <div className="account">
            <img alt="avatar" src={avatar} />
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
