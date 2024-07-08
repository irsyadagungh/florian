import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../redux/CreateSlice";
import {
  removeProduct,
  addQuantity,
  subtractQuantity,
  clearItems,
} from "../redux/CreateSlice";
import CardCart from "./CardCart";
import { useEffect } from "react";

const CartPage = ({ onClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };
  const handleAddQuantity = (product) => {
    dispatch(addQuantity(product));
  };
  const handleSubtractQuantity = (product) => {
    dispatch(subtractQuantity(product));
  };
  const handleClearItems = () => {
    dispatch(clearItems());
  };

  const categorizeItems = (category) => {
    return cartItems.filter((product) => product.category === category);
  };

  const handleCheckOut = () => {
    alert("Coming Soon");
  };

  const indoorPlants = categorizeItems("Indoor Plants");
  const outdoorPlants = categorizeItems("Outdoor Plants");
  const indoorGardenPlants = categorizeItems("Indoor Garden Plants");

  return (
    <div
      style={{
        padding: "60px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: "#E1E1E1",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Outdoor Plants</h2>
        {outdoorPlants.length === 0 && <p>No Outdoor Plants in your cart</p>}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {outdoorPlants.map((product) => (
            <CardCart
              key={product.id}
              product={product}
              quantity={product.quantity}
              totalAmount={product.quantity * product.price}
              removeProduct={() => handleRemoveProduct(product)}
              increaseProduct={() => handleAddQuantity(product)}
              substractProduct={() => handleSubtractQuantity(product)}
            />
          ))}
        </div>
        {outdoorPlants.length != 0 && (
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "13px",
              alignSelf: "center",
            }}
            onClick={handleClearItems}
          >
            Clear Items
          </button>
        )}
      </div>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Indoor Plants</h2>
        {indoorPlants.length === 0 && <p>No Indoor Plants in your cart</p>}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {indoorPlants.map((product) => (
            <CardCart
              key={product.id}
              product={product}
              quantity={product.quantity}
              totalAmount={product.quantity * product.price}
              removeProduct={() => handleRemoveProduct(product)}
              increaseProduct={() => handleAddQuantity(product)}
              substractProduct={() => handleSubtractQuantity(product)}
            />
          ))}
        </div>
        {indoorPlants.length != 0 && (
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "13px",
              alignSelf: "center",
            }}
            onClick={handleClearItems}
          >
            Clear Items
          </button>
        )}
      </div>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2>Indoor Garden Plants</h2>
        {indoorGardenPlants.length === 0 && (
          <p>No Indoor Garden Plants in your cart</p>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {indoorGardenPlants.map((product) => (
            <CardCart
              key={product.id}
              product={product}
              quantity={product.quantity}
              totalAmount={product.quantity * product.price}
              removeProduct={() => handleRemoveProduct(product)}
              increaseProduct={() => handleAddQuantity(product)}
              substractProduct={() => handleSubtractQuantity(product)}
            />
          ))}
        </div>
        {indoorGardenPlants.length != 0 && (
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "13px",
              alignSelf: "center",
            }}
            onClick={handleClearItems}
          >
            Clear Items
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <p>Total Item: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            style={{
              background: "none",
              border: "1px solid green",
              color: " black",
            }}
            onClick={handleCheckOut}
          >
            Check Out
          </button>
          <button style={{ background: "green" }} onClick={onClick}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
