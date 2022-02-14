import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaFreeCodeCamp,
} from 'react-icons/fa';
import { Social, HiddenText } from './styles';

export const SocialLinks = () => (
  <Social>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/beinnor"
    >
      <HiddenText>Github</HiddenText>
      <FaGithub />
    </a>   
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://linkedin.com/in/ronnie-bjørkelund-68161017a"
    >
      <HiddenText>LinkedIn</HiddenText>
      <FaLinkedin />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.freecodecamp.org/beinnor"
    >
      <HiddenText>freeCodeCamp</HiddenText>
      <FaFreeCodeCamp />
    </a>
  </Social>
);
