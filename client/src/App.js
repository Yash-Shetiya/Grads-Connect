import "bulma/css/bulma.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home/Home";
import OurGrads from "./pages/OurGrads/OurGrads";
import Login from "./pages/Login/Login";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";
import Register from "./pages/Register/Register";
import Events from "./pages/Events/Events";
import Admin from "./pages/Admin/Admin";
import TechNinjas from "./pages/TechNinjas/TechNinjas";
import Footer from "./pages/Footer/Footer";
import "./App.css";
import EventBox from "./pages/Events/EventBox";
import EventGallery from "./pages/Events/EventGallery";
import ForgotPassword from "./pages/Login/ForgotPassword";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile/Profile";
import Donate from "./pages/Donate/donate";
import AdminHome from "./pages/Admin/AdminHome";
import AdminTestimonial from "./pages/Admin/AdminTestimonial";
import AdminEvent from "./pages/Admin/AdminEvent";
import AdminVerify from "./pages/Admin/AdminVerify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(1);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/grads/:year/:dept" element={<OurGrads />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/activateAccount" element={<ActivateAccount />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/event/:id" element={<EventBox />}></Route>
          <Route path="/events/:slug" element={<Events />}></Route>
          <Route path="/event-gallery/:id" element={<EventGallery />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/adminhome" element={<AdminHome />}></Route>
          <Route path="/adminverify" element={<AdminVerify />}></Route>
          <Route
            path="/admintestimonial"
            element={<AdminTestimonial />}
          ></Route>
          <Route path="/adminevent" element={<AdminEvent />}></Route>
          <Route path="/about" element={<TechNinjas />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
