import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NetflixPage from "./pages/NetflixPage";
import UserManagerPage from "./pages/UserManagerPage";
import ProductsPage from "./pages/ProductsPage";
import TodosPage from "./pages/TodosPage";
import AddUser from "./components/user-manager/AddUser";
import UserDetails from "./components/user-manager/UserDetails";
import AboutPage from "./pages/AboutPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>

        <main className="mt-5 pt-2 container">
          {/* Configure the routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/netflix" element={<NetflixPage />} />
            <Route path="/user-manager" element={<UserManagerPage />} />
            <Route path="/user-manager/add" element={<AddUser />} />
            {/* This url is dynamic and having id as url param */}
            <Route path="/user-manager/:id" element={<UserDetails />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
