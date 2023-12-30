import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import ForgetPass from './pages/ForgetPass';
import SignUp from './pages/SignUp';
import MailBox from './pages/MailBox';
import Changepassword from './pages/Changepassword';
import Verifypassword from './pages/Verifypassword';
import Country from './pages/Country';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/forget" element={<ForgetPass/>}/>
      <Route path="/sign" element={<SignUp/>}/>
      <Route path="/login" element={<MailBox/>}/>
      <Route path="/changepass" element={<Changepassword/>}/>
      <Route path="/verify" element={<Verifypassword/>}/>
      <Route path="/country" element={<Country/>}/>
    </Routes>
   </div>
  );
}

export default App;
