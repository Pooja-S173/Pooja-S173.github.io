function About() {
  return (
    <section style={styles.about}>
      <h2>About Us</h2>
      <p>
        We provide high-quality services and a friendly experience to help you
        achieve your goals.
      </p>
    </section>
  );
}

const styles = {
  about: {
    padding: "40px",
    background: "#eee",
    textAlign: "center",
  },
};

export default About;
