import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Burger, Nav } from './styles';
import { NavLinks } from '../common/NavLinks';

export const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = (
    <Nav>
      <NavLinks />
    </Nav>
  );

  return (
    <>
      {showMenu ? navLinks : null}
      <Burger onClick={() => setShowMenu(!showMenu)}>
        <MdMenu />
      </Burger>
    </>
  );
};
