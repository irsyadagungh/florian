import Card from "./Card";
import { useState } from "react";
import { addProduct } from "../redux/CreateSlice";
import { useDispatch } from "react-redux";
import "./ProductPage.css";

const ProductPage = ({ products }) => {
  const dispatch = useDispatch();
  const [disableProduct, setDisableProduct] = useState([]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setDisableProduct([...disableProduct, product.id]);
    console.log("Product added to cart");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "60px",
        background: "#E1E1E1",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Outdoor Plants</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {products
            .filter((product) => product.category === "Outdoor Plants")
            .map((product) => (
              <Card
                key={product.id}
                product={product}
                addProduct={() => handleAddProduct(product)}
                disabled={disableProduct.includes(product.id)}
              />
            ))}
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Indoor Plants</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {products
            .filter((product) => product.category === "Indoor Plants")
            .map((product) => (
              <Card
                key={product.id}
                product={product}
                addProduct={() => handleAddProduct(product)}
                disabled={disableProduct.includes(product.id)}
              />
            ))}
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Indoor Garden Plants</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {products
            .filter((product) => product.category === "Indoor Garden Plants")
            .map((product) => (
              <Card
                key={product.id}
                product={product}
                addProduct={() => handleAddProduct(product)}
                disabled={disableProduct.includes(product.id)}
                classDisabled={disableProduct.includes(product.id) ? "disabled" : ""}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
