import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgetPass from "./pages/ForgetPass";
import SignUp from "./pages/SignUp";
import MailBox from "./pages/MailBox";
import Changepassword from "./pages/Changepassword";
import Verifypassword from "./pages/Verifypassword";
import Country from "./pages/Country";
import Programs from "./pages/Programs";
import Activity from "./pages/Activity";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import Account from "./pages/Account";
import Save from "./pages/Save";
import { Fab } from "@mui/material";
import Faq from "./pages/Faq";
import Dairy from "./pages/Dairy";
import Course2 from "./pages/Course2";
import Payment from "./pages/Payment";
import Freetrail from "./pages/Freetrail";
import Fine from "./pages/Fine";
import Abtcourse from "./pages/Abtcourse";
import Course2A from "./pages/Course2A";
import Submitalpha from "./pages/Submitalpha";
import Submitalpha1 from "./pages/Submitalpha1";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<MailBox />} />
        <Route path="/changepass" element={<Changepassword />} />
        <Route path="/verify" element={<Verifypassword />} />
        <Route path="/country" element={<Country />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/account" element={<Account />} />
        <Route path="/save" element={<Save />} />
        <Route path="/support" element={<Support />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/course2A" element={<Course2A />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/freetrail" element={<Freetrail />} />
        <Route path="/fine" element={<Fine />} />
        <Route path="/abtcourse" element={<Abtcourse />} />
        <Route path="/submitaplpha1" element={<Submitalpha1 />} />
      </Routes>
    </div>
  );
}

export default App;
