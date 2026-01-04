import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/layout";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        className={`flex-1 ${!isHome ? "mt-[var(--site-header-height)]" : ""}`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
