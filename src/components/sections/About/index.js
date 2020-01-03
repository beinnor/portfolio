import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, ImageWrapper, Paragraph } from './styles';
import Img from 'gatsby-image';

export const About = () => {
  const portrait = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="about">
      <h1>About</h1>
      <ImageWrapper>
        <Img fluid={portrait.placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
      <Paragraph>
        I am a hobbyist coder. I love javascript and html most. But also play
        around in other languages sometimes.
      </Paragraph>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
    </Wrapper>
  );
};