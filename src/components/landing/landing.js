import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaFreeCodeCamp,
} from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
`;

const Landing = () => (
  <Wrapper>
    <div class="intro">Hello, I'm Beinnor!</div>
    <div class="tagline">All-Star Dev | Code Fanatic | Linux Hacker | Bleh</div>
    <div class="icons-social">
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
      <a target="_blank" href="https://www.freecodecamp.org">
        <FaFreeCodeCamp />
      </a>
    </div>
  </Wrapper>
);

export default Landing;
