import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '@pages/Admin';
import Home from '@pages/Home';
import UsersInks from '@pages/UsersInks';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <>
      <nav>
        Navbar
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-inks" element={<UsersInks />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
