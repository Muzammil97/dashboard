import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import UsersPage from "./pages/UsersPage";
import UserDetail from "./pages/UserDetail";
import GithubFinder from "./pages/GithubFinder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/github-finder" element={<GithubFinder />} />
    </Routes>
  );
}

export default App;
