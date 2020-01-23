import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import { NavLinks } from '../common/NavLinks';
import { FooterWrapper, TopWrapper, BottomWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <TopWrapper>
        <NavLinks />
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
