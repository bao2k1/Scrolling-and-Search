import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, resetProducts } from "../../Redux/Actions/ProductActions";
import { AppDispatch } from "../../Redux/store";  // Import the AppDispatch type
import ProductCard from "./ProductCard";
import { ProductTypes } from "./ProductTypes";

interface ProductListProps {
  query: string;
}

const ProductList: React.FC<ProductListProps> = ({ query }) => {
  const dispatch = useDispatch<AppDispatch>();  // Use the AppDispatch type
  const { products, loading, hasMore, skip } = useSelector((state: any) => state.products);
  const observer = useRef<IntersectionObserver | null>(null);

  // Function to fetch more products
  const fetchMoreProducts = () => {
    if (loading || !hasMore) return;
    dispatch(fetchProducts(query, skip)); // Dispatch the fetch action
  };

  useEffect(() => {
    // Reset the products when the query changes
    dispatch(resetProducts());
    dispatch(fetchProducts(query, 0)); // Initial fetch to load the first 20 products
  }, [query, dispatch]);

  const lastProductRef = (node: HTMLDivElement | null) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        fetchMoreProducts(); // Trigger fetch when the last product is in view
      }
    });

    if (node) observer.current.observe(node);  // Observe the last product
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        padding: "20px",
      }}
    >
      {products.map((product:ProductTypes, index:number) => {
        if (index === products.length - 1) {
          // Attach the ref to the last product in the list
          return (
            <div ref={lastProductRef} key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        }
        return <ProductCard key={product.id} product={product} />;
      })}
      
      {/* Display loading spinner when fetching more products */}
      {loading && <p>Loading more products...</p>}
      
      {/* Display message when no more products to load */}
      {!hasMore && <p>No more products to load.</p>}
    </div>
  );
};

export default ProductList;
