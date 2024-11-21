import { StyledHomePage } from "./StyledHomePage";
import ProductList from "../../components/Product/ProductList";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { resetProducts } from "../../Redux/Actions/ProductActions";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // Get the query from the URL
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(resetProducts());
  }, [dispatch]);
  return (
    <StyledHomePage>
      <div className="home-content">
        <div className="home-content-wrapper">
          <div className="home-page">
            <h1>Products</h1>
            {/* Pass the query to ProductList */}
            <ProductList query={query} />
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
