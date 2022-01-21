import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstname"></label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              id="firstname"
            />
        </div>
        <div>
          <label htmlFor="lastname"></label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              id="lastname"
            />
        </div>
        <div>
          <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username (must be unique)"
              id="username"
            />
        </div>
        <div>
          <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
        </div>
      </form>
    </div>
  );
};

export default Signup;
