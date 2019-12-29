import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaFreeCodeCamp,
} from 'react-icons/fa';

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
        <div>
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
        </div>
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
