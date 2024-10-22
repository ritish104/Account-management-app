import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';  

const Register = () => {
  const { user } = useContext(UserContext);  
  const [email, setEmail] = useState(user?.email || '');  
  const [password, setPassword] = useState(user?.password || '');
  const [confirmPassword, setConfirmPassword] = useState(user?.password || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('User registered successfully');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
