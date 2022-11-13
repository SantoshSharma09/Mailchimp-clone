// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Main/AllRoutes";
import Body from "./Main/Body";
import Login from "./Main/Login";
import Signup from "./Main/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Body/> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
