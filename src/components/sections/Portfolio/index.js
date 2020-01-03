import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { GoStar, GoRepoForked } from "react-icons/go";

import { Wrapper, Projects, Item, Stats, Button } from './styles';

export const Portfolio = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  homepageUrl
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Wrapper id="portfolio">
      <h1>Portfolio</h1>
      <p>Some of my projects</p>
      <Projects>
        {edges.map(({ node }) => (
          <Item key={node.id}>
            <h3>{node.name}</h3>
            <a href={node.homepageUrl} target="_blank"
            rel="noopener noreferrer">
              Here is image.
            </a>
            <p>{node.description}</p>
            <Stats>
        <div><GoStar /> {node.stargazers.totalCount}</div>
        <div><GoRepoForked /> {node.forkCount}</div>
            </Stats>
            <Button href={node.url} target="_blank"
            rel="noopener noreferrer">
              <FaGithub></FaGithub> Github
            </Button>
          </Item>
        ))}
      </Projects>
    </Wrapper>
  );
};
