import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '@pages/Admin';
import Home from '@pages/Home';
import UsersInks from '@pages/UsersInks';
import NotFound from '@pages/NotFound';
import AppContainer from '@components/AppContainer';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-inks" element={<UsersInks />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
