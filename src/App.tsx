import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/layout";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
