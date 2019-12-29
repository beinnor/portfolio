import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  text-align: center;
  background: #485564;
  color: #fafafa;
`;

export const Headline = styled.h1`
  font-size: 3.75em;
  font-weight: 600;
`;

export const SubHeadline = styled.div`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  font-weight: 100;
`;

export const SocialIcons = styled.div`
  svg {
    color: #fafafa;
  }
`;
