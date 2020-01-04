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
        href="https://github.com/flexdinesh"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/flexdinesh"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dev.to/flexdinesh"
      >
        <FaDev />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/dineshpandiyan"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.freecodecamp.org"
      >
        <FaFreeCodeCamp />
      </a>
    </SocialIcons>
  </Wrapper>
);
