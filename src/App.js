import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProducts />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
