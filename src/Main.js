import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketDetails from "./views/BasketDetails/BasketDetailsPage/BasketPage";
import HomePage from "./views/Home/Home";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import { ProductsProvider } from "./utils/contexts/ProductsContext.js";
import { AppDataProvider } from "./utils/contexts/AppDataContext";
import ShippingForm from "./views/BasketDetails/ShippingInfo.js/ShippingForm";
import { useState } from "react";
import PaymentForm from "./views/BasketDetails/PaymentInfo.js/PaymentForm";

const Main = () => {
  const [shippingInfo, setShippingInfo] = useState("")
  return (
              // <BrowserRouter>
      <AppDataProvider>
        <ProductsProvider>
            <div className="block h-full">
                <Routes>
                  <Route
                    path="details/:id/*"
                    element={<ProductDetails />}
                  ></Route>
                  <Route
                    path="basket"
                    element={<BasketDetails />}
                  >
                    <Route path="info" element={<ShippingForm setInfo={setShippingInfo}/>}/>
                    <Route path="payment" element={<PaymentForm info={shippingInfo}/>}/>
                  </Route>
                  <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </div>
        </ProductsProvider>
      </AppDataProvider>
              // </BrowserRouter>
  );
};

export default Main;
