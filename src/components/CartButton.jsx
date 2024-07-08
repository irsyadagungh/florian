import Cart from "../assets/cart.png";

const CartButton = ({ totalItems, onClick }) => {

    

  return (
    <button
    onClick={onClick}
      style={{
        background: "rgba(0,0,0,0)",
        border: "none",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        color: "white",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          width: "24px",
          height: "24px",
          marginLeft: "8px",
          filter: "invert(1)",
        }}
        src={Cart}
        alt="Cart"
      />
      {totalItems}
    </button>
  );
};

export default CartButton;
