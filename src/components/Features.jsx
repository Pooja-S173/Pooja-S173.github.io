function Features() {
  const items = ["Fast Performance", "Modern UI", "Easy to Use"];

  return (
    <div style={styles.features}>
      <h2>Our Features</h2>
      <ul>
        {items.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  features: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Features;


