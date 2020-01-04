import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaFreeCodeCamp,
} from 'react-icons/fa';

import { Wrapper, Headline, SubHeadline, SocialIcons } from './styles';

export const Landing = () => (
  <Wrapper id="landing">
    <Headline>Hello, I'm Beinnor!</Headline>
    <SubHeadline>Web Developer | Linux User | Bleh</SubHeadline>
    <SocialIcons>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/beinnor"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ronniebjork"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dev.to/beinnor"
      >
        <FaDev />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="linkedin.com/in/ronnie-bjørkelund-68161017a"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.freecodecamp.org/beinnor"
      >
        <FaFreeCodeCamp />
      </a>
    </SocialIcons>
  </Wrapper>
);
