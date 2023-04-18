import React from 'react'

const LoginPage = () => {
    const handleSubmit = (event) => {
      const formData = new FormData(event.currentTarget);
      event.preventDefault();
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

export default LoginPage