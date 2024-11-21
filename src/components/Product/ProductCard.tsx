import React from "react";
import { ProductTypes } from "./ProductTypes";

const ProductCard: React.FC<{ product: ProductTypes }> = ({ product }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
    }}
  >
    <img
      src={product.thumbnail}
      alt={product.title}
      style={{ width: "100%", height: "150px", objectFit: "cover" }}
    />
    <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
    <p style={{ color: "green", fontWeight: "bold" }}>${product.price}</p>
  </div>
);

export default ProductCard;
