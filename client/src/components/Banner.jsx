function Banner() {
  return (
    <div
      style={{
        margin: "20px",
        background: "linear-gradient(135deg,#2E7D32,#66BB6A)",
        color: "white",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Fresh Groceries
      </h2>

      <p style={{ marginTop: "10px" }}>
        Get all your daily essentials delivered to your doorstep.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          background: "white",
          color: "#2E7D32",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Banner;