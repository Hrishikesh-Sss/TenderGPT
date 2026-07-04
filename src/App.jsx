import Titlebar from "./components/layout/title-bar";
import SideBar from "./components/layout/side-bar";
import UploadSection from "./components/upload-section";

function App() {
  return (
    <div style={styles.appLayout}>
      <SideBar />

      <main style={styles.mainContainer}>
        <Titlebar />

        <UploadSection />
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
    marginLeft: "280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    padding: "40px",
    minHeight: "100vh",
    boxSizing: "border-box"
  }
};

export default App;