import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper } from './styles';

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
      <div>
        <h2>Project 1</h2>
        <p>This is project description text.</p>
      </div>
      <div>
        {edges.map(({ node }) => (
          <div
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </div>
              <div>
                <div>
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <span>{node.forkCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
