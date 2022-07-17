import Main from "./Main.js";
import { Footer, Heading, HeaderAd } from "./components";
import { BrowserRouter } from "react-router-dom";
import BasketDetails from "./views/BasketDetails/BasketDetailsPage/BasketPage";
import { BasketProvider } from "./utils/contexts/BasketContext.js";

const App = () => {
  return (
    <BasketProvider>
      <BrowserRouter>
        <HeaderAd />
        <div className="flex flex-col overflow-y-auto xs:p-2 mx-auto" dir="rtl">
          <Heading />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </BasketProvider>
  );
};

export default App;
