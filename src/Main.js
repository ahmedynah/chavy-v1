import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketDetails from "./views/BasketDetails/BasketDetailsPage/BasketPage";
import HomePage from "./views/Home/Home";
import ProductDetails from "./views/ProductDetails/ProductDetails";
const Main = () => {
  return (
    <div className="block h-full">
      <BrowserRouter>
        <Routes>
          <Route path="details/:id" element={<ProductDetails />}></Route>
          <Route path="basket/:id" element={<BasketDetails />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
