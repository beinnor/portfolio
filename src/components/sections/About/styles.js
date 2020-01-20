import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background: rgb(72,85,100);
  background: -moz-linear-gradient(0deg, rgba(72,85,100,1) 0%, rgba(34,35,36,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(72,85,100,1) 0%, rgba(34,35,36,1) 100%);
  background: linear-gradient(0deg, rgba(72,85,100,1) 0%, rgba(34,35,36,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#485564",endColorstr="#222324",GradientType=1); 
  padding: 2rem 10rem 2rem 10rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

export const Paragraph = styled.p`
`;

export const ImageWrapper = styled.div`
  width: 10rem;
  margin: 1rem 0 1rem 0;

  img {
    border-radius: 150px;
  }
`;
