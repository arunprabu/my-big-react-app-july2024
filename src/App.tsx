import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NetflixPage from "./pages/NetflixPage";
import UserManagerPage from "./pages/UserManagerPage";
import ProductsPage from "./pages/ProductsPage";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="mt-5 pt-2 container">
        {/* Configure the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/user-manager" element={<UserManagerPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
