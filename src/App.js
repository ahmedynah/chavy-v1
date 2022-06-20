import Heading from "./components/Heading";
import Main from "./Main.js";
import NotificationBar from "./components/NotificationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NotificationBar />
      <div className="columns-1 overflow-y-auto xs:p-2 mx-auto" dir="rtl">
        <Heading />
        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
