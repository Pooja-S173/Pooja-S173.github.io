function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#222",
    color: "white",
  },
  logo: { fontSize: "24px", fontWeight: "bold" },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
};

export default Navbar;



