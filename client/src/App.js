import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import { AuthProvider } from './context/authContext.js'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './pages/comingSoon.js';
import PageNotFound from './pages/pageNotFound.js';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<ComingSoon />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/generate-invoice" element={<ComingSoon />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </AuthProvider>
  );
}

export default App;