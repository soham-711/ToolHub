import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import "./styles/global.css";
import "./styles/themes.css";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
