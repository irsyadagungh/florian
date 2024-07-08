import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import background from "./assets/landingPage-bg.jpg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [showProductList, setShwoProductList] = useState(false);

  const handleProductVisibility = () => {
    setShwoProductList(!showProductList);
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div
        style={{
          zIndex: "-2",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`, // Pusatkan gambar
        }}
      />
      <div
        style={{
          zIndex: "-1",
          position: "absolute",
          background: "rgba(0,0,0, 0.5)",
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(20px)",
        }}
      />

      <div style={{ margin: "auto", width: "50%" }}>
        <h1>Welcome to Florian Website</h1>
        <button style={{background: 'green'}} onClick={handleProductVisibility}>Get Started</button>
      </div>
      <div style={{ margin: "auto", width: "50%", padding: "100px" }}>
        <h2>
          Florian is your ultimate destination for exquisite houseplants that
          bring life and serenity to your home. Our carefully curated selection
          features a diverse array of houseplants, from lush ferns to vibrant
          succulents, each chosen for their beauty and ease of care. Whether
          you're a seasoned plant enthusiast or just starting your green
          journey, we provide detailed care instructions and personalized
          recommendations to help you cultivate a thriving indoor garden.
          Enhance your living space with our quality plants and enjoy the
          benefits of nature's tranquility, delivered right to your doorstep.
        </h2>
      </div>

      <div
        style={{
          position: "absolute",
          overflowX: "hidden",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.9)",
          transition: "top 0.5s ease",
          overflowY: "auto",
          zIndex: "2",
          backdropFilter: "blur(5px)",
        }}
        className={showProductList ? "show" : "hide"}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
