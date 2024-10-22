import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const AccountInfo = () => {
  const { user, setUser } = useContext(UserContext);  
  const [isEditing, setIsEditing] = useState(false);  
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');

  const handleSave = () => {
   
    setUser({ email, password });
    setIsEditing(false);
  };

  if (!user) {
    return <p>No user is logged in.</p>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">Account Information</h3>

        {!isEditing ? (
        
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <button 
              className="btn btn-primary mt-3" 
              onClick={() => setIsEditing(true)}  
            >
              Edit
            </button>
          </div>
        ) : (
          
          <form>
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
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={handleSave}  
            >
              Save
            </button>
            <button 
              type="button" 
              className="btn btn-secondary ms-2" 
              onClick={() => setIsEditing(false)}  
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
