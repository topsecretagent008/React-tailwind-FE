import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Dashboard from './pages/Dashboard.js';

import Login from './dashborad/Login.js';
import Signup from './dashborad/Signup.js';



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route  exact path="/" element={<Dashboard />}/>
            <Route  exact path="/login" element={<Login />}/>
            <Route  exact path="/signup" element={<Signup />}/>
          </Routes>
        </Router>        
    </div>
  );
}

export default App;
