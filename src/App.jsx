import './App.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountPage from './Pages/UserAccount/AccountPage/AccountPage';
import ProfilePage from './Pages/UserAccount/ProfilePage/ProfilePage';
import ProfileDetails from './Pages/UserAccount/ProfileDetails/ProfileDetails';
import SettingsPage from './Pages/UserAccount/Settings/SettingsPage';
import PromotionsPage from './Pages/UserAccount/Promotions/PromotionsPage';
import AddressScreen from './Pages/Address/Address';
import SelectPaymentMethodPage from './Pages/Payment/Payment';
import FundWallet from './Pages/UserAccount/FundWallet/FundWallet';
import AuthPage1 from './Pages/Authentication/AuthPage1';
import SignIn from './Pages/Authentication/SignIn';
import LogIn from './Pages/Authentication/Login';
import OtpVerification from "./Pages/Authentication/OtpVerification"
import AllTransactionHistory from './Pages/UserAccount/TransactionHistory/AllTransactionHistory';
import LandingPage from './Pages/LandingPage/LandingPage';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path="/authpage1" element={<AuthPage1/>}/>
        <Route path="/signup" element={<SignIn/>}/>
        <Route path='/otpverification' element={<OtpVerification/>}/>
        <Route path="/login" element={<LogIn/>}/>
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
