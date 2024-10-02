import React from 'react';


export const CheckingAuth = () => {
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div 
        className="spinner-border text-warning" 
        role="status"
        >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
