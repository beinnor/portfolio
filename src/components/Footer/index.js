import React from 'react';
import { SocialLinks } from '../common/SocialLinks';

import { TopWrapper, BottomWrapper } from './styles';

const Footer = () => {
  return (
    <footer>
      <TopWrapper>
        <nav>
          <ul>
            <li>
              <a href="#landing">Scroll to top</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <SocialLinks />
      </TopWrapper>
      <BottomWrapper>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </BottomWrapper>
    </footer>
  );
};

export default Footer;
