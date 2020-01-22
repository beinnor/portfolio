import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background: #485564;
  padding: 2rem;
  text-align: center;
`;

export const Projects = styled.div`
  display: grid;
  grid-gap: 0.7rem;
  margin: 1rem 0 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid black;
  h3 {
    text-align: center;
    color: black;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0.5rem;
  }
  img {
    border: 1px solid black;
  }
  color: black;
  background: #ececec;
`;

export const Image = styled.div`
  width: 100%;
`;

export const Stats = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  div {
    margin: 0 1rem 0 1rem;
  }
`;

export const Button = styled.a`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  border: 1px solid black;
  background: #464646;
  &:hover {
    background: #485564;
    text-decoration: none;
  }
  svg {
    margin-right: 0.5rem;
  }
`;
