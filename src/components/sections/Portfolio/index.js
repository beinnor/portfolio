import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { GoStar, GoRepoForked } from 'react-icons/go';
import Img from "gatsby-image";

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
        allFile(filter: { id: { regex: "/screenshot/" } }) {
          nodes {
            id
            name
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `
  );

  console.log(data.allFile);

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
              Live
              <img
                src={`https://raw.githubusercontent.com/${node.owner.login}/${node.name}/master/screenshot.png`}
                alt={`Screenshot of ${node.name}`}
              />
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
