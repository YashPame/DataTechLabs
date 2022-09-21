import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";

import Progress from "./Components/Progress";
import Analytics from "./Components/Analytics";
import Dashboard from "./Components/Dashboard";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
      <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/analytics" element={<Analytics />} />
      </Routes>
      </>

  );
}

export default App;
