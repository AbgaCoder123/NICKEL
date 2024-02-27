import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/access/Register";
import Login from "./components/access/Login";
import ForgetPassword from "./components/access/ForgetPassword";
import ResetPassword from "./components/access/ResetPassword";
import Home from "./components/user/Home";
import "./styles/no-scrollbar.css";
import "./styles/all.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/access/signup" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/access/forgetpassword" element={<ForgetPassword />} />
        <Route path="/access/resetpassword" element={<ResetPassword />} />
        <Route path="/user/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
