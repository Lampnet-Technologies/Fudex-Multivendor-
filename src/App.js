import './App.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountPage from './Pages/UserAccount/AccountPage/AccountPage';
import ProfilePage from './Pages/UserAccount/ProfilePage/ProfilePage';
import ProfileDetails from './Pages/UserAccount/ProfileDetails/ProfileDetails';
// import AddressScreen from './Pages/Address/Address';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
