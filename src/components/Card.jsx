const Card = ({ product, addProduct, disabled, classDisabled }) => {
  return (
    <div
      style={{
        width: "210px",
        height: "280px",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.3)",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={product.image}
        alt={product.name}
      />
      <div
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-around",
          alignItems: "end",
        }}
      >
        <div>
          <p style={{ margin: "0" }}>{product.name}</p>
          <p style={{ margin: "0" }}>${product.price}</p>
        </div>
        <button
          disabled={disabled}
          className={classDisabled}
          style={{
            width: "100px",
            height: "50px",
            background: disabled ? "gray" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          onClick={addProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
