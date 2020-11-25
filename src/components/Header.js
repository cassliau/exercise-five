import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">User Profile</a>
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
        <a href="/create-account">Create Account</a>
      </nav>
    </header>
  );
}

export default Header;
