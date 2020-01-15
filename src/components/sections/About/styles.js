import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background: #526f7a;
  padding: 2rem 10rem 2rem 10rem;
  color: #fafafa;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ImageWrapper = styled.div`
  width: 10rem;
  margin: 1rem 0 1rem 0;

  img {
    border-radius: 150px;
  }
`;
