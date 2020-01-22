import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, ImageWrapper, Paragraph } from './styles';
import Img from 'gatsby-image';

export const About = () => {
  const portrait = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait1.jpg" }) {
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
        <Img
          fluid={portrait.placeholderImage.childImageSharp.fluid}
          alt="Photo of me"
        />
      </ImageWrapper>
      <article>
        <Paragraph>
          I like coding. It's my hobby. Javascript is my favourite language, but
          I also have some experience in other languages such as C and Python.
        </Paragraph>
        <Paragraph>
          I made this portfolio page with Gatsby. It uses a custom plugin to
          pull data from GitHub API v4 (GraphQl), and displays data from my
          pinned repositories.
        </Paragraph>
      </article>
    </Wrapper>
  );
};
