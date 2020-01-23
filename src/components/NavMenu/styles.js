import styled from 'styled-components';

export const Burger = styled.div`
  color: #fefefe;
  background-color: hsla(0, 0%, 0%, 0.9);
  border-radius: 4px;
  font-size: 2rem;
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  line-height: 0;

  &:hover {
    background-color: #fefefe;
    color: #000000;
  }
`;

export const Nav = styled.nav`
  background-color: hsla(0, 0%, 0%, 0.9);
  position: fixed;
  left: 1rem;
  padding: 1rem 1rem 0 1rem;
  bottom: 4rem;
  border-radius: 4px;
`;
