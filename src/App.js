import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import {ForgotPassword} from "./pages/ForgotPassword";
import { Offers } from "./pages/Offers";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Header } from "./component/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import privateRoute from "./component/priveRoute";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<privateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </Router>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}

export default App;
