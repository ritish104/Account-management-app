import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AccountInfo from './components/AccountInfo';
import { UserProvider } from './context/UserContext';  

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountInfo />} />  
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
