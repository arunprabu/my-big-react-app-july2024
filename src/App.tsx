import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>

        <main className="mt-5 pt-2 container">
          <MainRoutes/>
        </main>
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
