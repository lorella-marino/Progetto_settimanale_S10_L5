import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <>
      <div>
        <MyNavbar />
        <MyFooter />
      </div>
    </>
  );
};

export default App;
