import { Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
