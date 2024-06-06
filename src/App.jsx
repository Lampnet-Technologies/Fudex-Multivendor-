import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignIn from "./Pages/Authentication/SignIn";
import EmailVerification from "./Pages/Authentication/EmailVerification";
import EmailVerified from "./Pages/Authentication/EmailVerified";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import ForgetPasswordMailMessage from "./Pages/Authentication/ForgetPasswordMailMessage";
import CreateNewPassword from "./Pages/Authentication/CreateNewPassword";
import PasswordUpdated from "./Pages/Authentication/PasswordUpdated";
import CompleteProfile from "./Pages/Authentication/CompleteProfile";
import LogIn from "./Pages/Authentication/Login";
import AboutUs from './Pages/AboutUs/AboutUs';
import Meals from './Pages/Meals/Meals';
import FavoritesPage from './Pages/Favorites/Favorites';
import AccountPage from './Pages/UserAccount/AccountPage/AccountPage';
import ProfilePage from './Pages/UserAccount/ProfilePage/ProfilePage';
import ProfileDetails from './Pages/UserAccount/ProfileDetails/ProfileDetails';
import SettingsPage from './Pages/UserAccount/Settings/SettingsPage';
import PromotionsPage from './Pages/UserAccount/Promotions/PromotionsPage';
import AddressScreen from './Pages/Address/Address';
import SelectPaymentMethodPage from './Pages/Payment/Payment';
import FundWallet from './Pages/UserAccount/FundWallet/FundWallet';
import AllTransactionHistory from './Pages/UserAccount/TransactionHistory/AllTransactionHistory';



const App = () => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/emailverification' element={<EmailVerification />} />
        <Route path='/emailverified' element={<EmailVerified />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/completeprofile' element={<CompleteProfile />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/forgetpasswordmailmessage' element={<ForgetPasswordMailMessage />} />
        <Route path='/createnewpassword' element={<CreateNewPassword />} />
        <Route path='/passwordupdated' element={<PasswordUpdated />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/meals" element={<Meals favoriteMeals={favoriteMeals} setFavoriteMeals={setFavoriteMeals}/>} />
        <Route path="/favorites" element={<FavoritesPage favoriteMeals={favoriteMeals} />} />
        <Route path="/account-page" element={<AccountPage />} />
        <Route path="/address" element={<AddressScreen />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/fund-wallet" element={<FundWallet />} />
        <Route path="/other-payment-method" element={<SelectPaymentMethodPage />} />
        <Route path="/transaction-history" element={<AllTransactionHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
