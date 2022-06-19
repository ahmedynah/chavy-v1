import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
const Main = () => {
  return (
    <div className="block h-full">
      <BrowserRouter>
        <Routes>
          <Route path="details/:id" element={<ProductDetails />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
