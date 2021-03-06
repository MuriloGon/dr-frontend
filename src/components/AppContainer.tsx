import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MainContainer } from '@styles/containers';
import { Routes } from '../utils/globalVariables';
import Navbar from './Navbar';

type Props = { isAuth: boolean, logout: () => void };

const AppContainer: FC<Props> = ({ children, isAuth, logout }) => {
  const [route, setRoute] = useState<Routes>(Routes.home);
  const location = useLocation();

  useEffect(() => {
    let a = Routes.home;
    if (location.pathname === '/') a = Routes.home;
    else if (location.pathname === '/users-inks') a = Routes.inks;
    else if (location.pathname === '/admin') a = Routes.admin;
    else { a = Routes.notFound; }
    setRoute(a);
  }, [location.pathname]);

  return (
    <MainContainer>
      <Navbar currentRoute={route} isAuth={isAuth} logout={logout} />
      <main>
        {children}
      </main>
    </MainContainer>
  );
};

export default AppContainer;
