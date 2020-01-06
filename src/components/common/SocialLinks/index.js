import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaFreeCodeCamp,
} from 'react-icons/fa';
import { Social } from './styles';

export const SocialLinks = () => (
  <Social>
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
    <a target="_blank" rel="noopener noreferrer" href="https://dev.to/beinnor">
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
  </Social>
);
