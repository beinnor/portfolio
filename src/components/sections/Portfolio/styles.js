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
  }
`;

export const Image = styled.div`
  width: 100%;
  border: 2px black solid;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    border-color: white;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin-bottom: 0.3rem;
`;
