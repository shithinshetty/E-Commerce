import { Route, Routes } from "react-router-dom";
import HomePAge from "./pages/HomePAge";
import Contact from "./pages/Contact";

import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboar from "./user/Dashboar";
import PrivateROute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePAge />}></Route>
        <Route path="/dashboard" element={<PrivateROute />}></Route>
        <Route path="" element={<Dashboar />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
      </Routes>
    </>
  );
}

export default App;
