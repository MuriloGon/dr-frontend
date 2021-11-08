import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="users-inks">
        <button type="button">Users Inks</button>
      </Link>
      <Link to="admin">
        <button type="button">Admin</button>
      </Link>
    </div>
  );
}

export default Navbar;
