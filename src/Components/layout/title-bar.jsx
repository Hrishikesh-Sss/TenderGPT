import React from "react";


const Header = ({ title, subtitle }) => {
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.mainTitle}>{title}</h1>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};


const TitleBar = ({
  title = "TenderGPT",
  subtitle = "AI-Powered Document Retrieval and Intelligence System"
}) => {
  return (
    <header className="mainbar-container">
      <div className="mainbar-content">
        <Header title={title} subtitle={subtitle} />
      </div>
    </header>
  );
};

const styles = {
  headerContainer: {
    textAlign: "center",
    margin: "40px 0",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  mainTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: "-1px",
    margin: "0 0 8px 0",
    textShadow: "0 2px 4px rgba(0,0,0,0.2)"
  },
  subtitle: {
    fontSize: "1rem",
    color: "#8a99ad",
    margin: 0,
    fontWeight: "400"
  }
};

export default TitleBar;