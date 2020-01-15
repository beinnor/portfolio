import React from 'react';
import { SocialLinks } from '../common/SocialLinks';

import { FooterWrapper, TopWrapper, BottomWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
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
        by {new Date().getFullYear()}{' '}
        <a href="http://beinnor.netlify.com/">Beinnor</a>
      </BottomWrapper>
    </FooterWrapper>
  );
};

export default Footer;
