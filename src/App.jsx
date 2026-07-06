import { useState } from "react";
import "./App.css";
import Mainbar from "./Components/mainbar";
import SideToolbar from "./Components/sidetoolbar";
import UploadSearchSection from "./Wrappers/Qbar&pdfcont";
import api from "./Components/api";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.appLayout}>
      <SideToolbar/>

      <main style={styles.mainContainer}>
        <Mainbar side={{title:'headTitle'}}/>

        <UploadSearchSection/>
      </main>
    </div>
  );
}

const styles = {
  appLayout: {
    display: "flex",
    width: "100%",
    minHeight: "10vh",
    background: "#0b0f19",
    overflow: "hidden"
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    padding: "40px"
  }
};

export default App;