import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/layout";

function App() {
  return (
    <div>
      <Header />

      <main style={{ paddingTop: "var(--site-header-height, 0px)" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
