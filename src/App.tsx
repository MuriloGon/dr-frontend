import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '@pages/Admin';
import Home from '@pages/Home';
import UsersInks from '@pages/UsersInks';
import NotFound from '@pages/NotFound';
import AppContainer from '@components/AppContainer';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const userAuth = token !== null;

  return (
    <AppContainer isAuth={userAuth} logout={() => setToken(null)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-inks" element={<UsersInks />} />
        <Route path="/admin" element={<Admin token={token} setToken={(setToken)} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
