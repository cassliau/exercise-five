import React from "react";

function LoginForm({ LoginFunction }) {
  return (
    <div>
      <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
