const CardCart = ({
  product,
  quantity,
  removeProduct,
  increaseProduct,
  substractProduct,
  totalAmount,
}) => {
  return (
    <div
      style={{
        width: "480px",
        height: "240px",
        background: "#fff",
        display: "flex",
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ margin: "0" }}>{product.name}</p>
          <p style={{ margin: "0" }}>${product.price}</p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            style={{
              width: "50px",
              height: "40px",
              background: "none",
              color: "black",
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: "100px",
            }}
            onClick={increaseProduct} // Pastikan onClick ada di sini
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            style={{
              width: "50px",
              height: "40px",
              background: "none",
              color: "black",
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: "100px",
            }}
            onClick={substractProduct} // Pastikan onClick ada di sini
          >
            -
          </button>
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "13px",
            }}
            onClick={removeProduct} // Pastikan onClick ada di sini
          >
            Remove
          </button>
        </div>
        <span>Total: ${totalAmount}</span>
      </div>
    </div>
  );
};

export default CardCart;
