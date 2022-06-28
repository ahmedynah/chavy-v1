import Main from "./Main.js";
import {Footer, Heading, HeaderAd} from "./components";
function App() {
  return (
    <>
      <HeaderAd />
      <div className="columns-1 overflow-y-auto xs:p-2 mx-auto" dir="rtl">
        <Heading />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
