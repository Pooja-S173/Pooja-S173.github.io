import FooterAbout from "./FooterAbout";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <FooterAbout />
      <FooterLinks />
      <FooterContact />
      <FooterSocial />
    </footer>
  );
}

const styles = {
  footer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "40px",
    background: "#222",
    color: "white",
    gap: "20px",
  },
};
