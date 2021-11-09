import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavButton } from '@styles/navbar';
import { Routes } from '../utils/globalVariables';

type Props = {
  currentRoute: Routes
};

const Navbar: FC<Props> = ({ currentRoute }) => {
  const buttonSelected = (route: Routes) => currentRoute === route;
  return (
    <NavbarContainer>
      <div>
        <Link to="/">
          <NavButton
            selected={buttonSelected(Routes.home)}
            rounded="left"
            type="button"
          >
            Home

          </NavButton>
        </Link>
        <Link to="users-inks">
          <NavButton
            selected={buttonSelected(Routes.inks)}
            rounded="right"
            type="button"
          >
            Users Inks
          </NavButton>
        </Link>
      </div>
      <Link to="admin">
        <NavButton
          selected={buttonSelected(Routes.admin)}
          rounded="all"
          type="button"
        >
          Login admin
        </NavButton>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
