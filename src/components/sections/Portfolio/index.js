import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { GoStar, GoRepoForked } from 'react-icons/go';
import Img from 'gatsby-image';

import { Wrapper, Projects, Item, Stats, Button } from './styles';

export const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      {
        allRepo {
          nodes {
            node {
              name
              description
              forkCount
              homepageUrl
              id
              resourcePath
              url
              stargazers {
                totalCount
              }
              owner {
                login
              }
            }
          }
        }
        allFile(filter: { absolutePath: { regex: "/screenshot/" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const screenshotImage = imageName => {
    const test = data.allFile.edges.filter(elem => {
      if (elem.node.name === imageName) {
        return true;
      }
      return false;
    });

    return <Img fluid={test[0].node.childImageSharp.fluid} />;
  };

  return (
    <Wrapper id="portfolio">
      <h1>Portfolio</h1>
      <p>My pinned repositories on GitHub</p>
      <Projects>
        {data.allRepo.nodes.map(({ node }) => (
          <Item key={node.id}>
            <h3>{node.name}</h3>
            <a
              href={node.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {screenshotImage(`screenshot-${node.name}`)}
            </a>
            <p>{node.description}</p>
            <Stats>
              <div>
                <GoStar>{node.stargazers.totalCount}</GoStar>
              </div>
              <div>
                <GoRepoForked>{node.forkCount}</GoRepoForked>
              </div>
            </Stats>
            <Button href={node.url} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Github
            </Button>
          </Item>
        ))}
      </Projects>
    </Wrapper>
  );
};
