import './App.css';
import Navbar from "./Navbar";
import LoginLandingPage from './Components/Login/LoginLandingPage';

import {Route, Routes} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Progress from "./Components/Progress";
import Analytics from "./Components/Analytics";
import Profile from "./Components/Profile";
function App() {
  return (
      <div className="MainCont">
        {/* <h1>AI Assessment</h1> */}
        {/* <LoginLandingPage /> */}
        
        <Routes>
          <Navbar />
          <Route path="/" element={<LoginLandingPage />} /> 

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
  );
}

export default App;
