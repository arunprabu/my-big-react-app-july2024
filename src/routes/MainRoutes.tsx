import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import FallbackErrorMessage from "../components/shared/FallbackErrorMessage";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

import ProductsPage from "../pages/ProductsPage";
import TodosPage from "../pages/TodosPage";

import { lazy, Suspense } from "react";
// Lazily loading components -- also implement Suspense
const NetflixPage = lazy(() => import( "../pages/NetflixPage"));
const UserManagerPage = lazy(() => import("../pages/UserManagerPage"));
const AddUser = lazy(() => import("../components/user-manager/AddUser"));
const UserDetails = lazy(
  () => import("../components/user-manager/UserDetails")
);

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-5 pt-5">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <ErrorBoundary fallback={<FallbackErrorMessage />}>
        {/* Configuring the routes */}
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
      </ErrorBoundary>
    </Suspense>
  );
};

export default MainRoutes;
