import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';

// Layouts

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="offers" element={<Offers />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
