function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Welcome to Our Website</h1>
      <p>Your success starts here.</p>
      <button style={styles.btn}>Get Started</button>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px",
    background: "#f2f2f2",
  },
  btn: {
    padding: "10px 20px",
    background: "#222",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Hero;

