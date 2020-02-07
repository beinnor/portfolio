import React from 'react';

import { SocialLinks } from '../../common/SocialLinks';
import { Wrapper, Headline, SubHeadline } from './styles';

export const Landing = () => (
  <Wrapper id="landing">
    <Headline>Hello, I'm Ronnie 😎</Headline>
    <SubHeadline>Web Developer | Linux User | Bleh</SubHeadline>
    <SocialLinks />
  </Wrapper>
);
