import Heading from "./Heading.js";
import Main from "./Main.js";
import NotificationBar from "./NotificationBar.js";

function App() {
  return (
    <>
    <NotificationBar/>
    <div className="columns-1 overflow-y-auto xs:p-2 mx-auto" dir="rtl">
      <Heading/>
      <Main/>
    </div>
    </>
  );
}

export default App;
