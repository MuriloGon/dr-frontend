import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        Navbar
      </nav>
      <Routes>
        <Route path="/" element={(<h1>Home</h1>)} />
        <Route path="/users-inks" element={(<h1>inks</h1>)} />
        <Route path="/admin" element={(<h1>admin</h1>)} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
