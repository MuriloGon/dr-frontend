import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Admin from '@pages/Admin';
import Home from '@pages/Home';
import UsersInks from '@pages/UsersInks';
import NotFound from '@pages/NotFound';
import Navbar from '@components/Navbar';
import { MainContainer } from '@styles/containers';
import { Routes as AppRoutes } from './utils/globalVariables';

function App() {
  const [route, setRoute] = useState<AppRoutes>(AppRoutes.home);
  const location = useLocation();

  useEffect(() => {
    let a = AppRoutes.home;
    if (location.pathname === '/') a = AppRoutes.home;
    else if (location.pathname === '/users-inks') a = AppRoutes.inks;
    else if (location.pathname === '/admin') a = AppRoutes.admin;
    else { a = AppRoutes.notFound; }
    setRoute(a);
  }, [location.pathname]);

  return (
    <MainContainer>
      <Navbar currentRoute={route} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-inks" element={<UsersInks />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
