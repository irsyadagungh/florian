import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/CreateSlice";
import CartButton from "./CartButton";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Snake Plant",
      image:
        "https://fyf.tac-cdn.net/images/products/large/YA112.jpg?auto=webp&quality=80&width=690",
      price: 20.99,
      category: "Indoor Plants",
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      image:
        "https://cdn.atwilltech.com/flowerdatabase/m/monstera-house-plant-PL110822.425.jpg",
      price: 34.99,
      category: "Indoor Plants",
    },
    {
      id: 3,
      name: "Rose",
      image:
        "https://img.joomcdn.net/a48beb5d18b96aa472e37b3e0308251c7e7cf58c_original.jpeg",
      price: 14.99,
      category: "Outdoor Plants",
    },
    {
      id: 4,
      name: "Tulip",
      image:
        "https://cdn-dpau.b-cdn.net/wp-content/uploads/2022/03/Potted-Artificial-Tulip-with-White-Flowers-1.jpg",
      price: 7.99,
      category: "Outdoor Plants",
    },
    {
      id: 5,
      name: "Orchid",
      image:
        "https://d775ypbe1855i.cloudfront.net/large/9/9_1585330827_7508.png",
      price: 24.99,
      category: "Indoor Garden Plants",
    },
    {
      id: 6,
      name: "Fiddle Leaf Fig",
      image:
        "https://cdn.mall.adeptmind.ai/https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_7f53b7f8-d5bc-4aaa-9765-1c060c6db666%3Fwid%3D1000%26hei%3D1000_large.jpg",
      price: 29.99,
      category: "Indoor Garden Plants",
    },
  ];

  const [currPage, setCurrPage] = useState("home");

  const totalItems = useSelector(selectTotalItems);

  const renderPage = () => {
    switch (currPage) {
      case "home":
        return <ProductPage products={products} />;
      case "cart":
        return <CartPage onClick={() => setCurrPage("home")} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#fff",
        color: "black",
      }}
    >
      <nav
        style={{
          width: "100%",
          background: "#2E622F",
          height: "64px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "white" }}>Florian</h3>
        <ul>
          <button
            style={{ background: "none" }}
            onClick={() => setCurrPage("home")}
          >
            Product List
          </button>
          <button
            style={{ background: "none" }}
            onClick={() => setCurrPage("cart")}
          >
            Cart List
          </button>
        </ul>
        <CartButton onClick={() => setCurrPage("cart")} totalItems={totalItems} />
      </nav>
      {renderPage()}
    </div>
  );
};

export default Home;
