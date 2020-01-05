import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { GoStar, GoRepoForked } from 'react-icons/go';

import { Wrapper, Projects, Item, Stats, Button } from './styles';

export const Portfolio = () => {
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    description
                    forkCount
                    homepageUrl
                    url
                    stargazers {
                      totalCount
                    }
                    owner {
                      id
                      login
                    }
                  }
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
      <p>My pinned repositories on GitHub</p>
      <Projects>
        {edges.map(({ node }) => (
          <Item key={node.id}>
            <h3>{node.name}</h3>
            <a
              href={node.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://raw.githubusercontent.com/${node.owner.login}/${node.name}/master/screenshot.png`}
              />
            </a>
            <p>{node.description}</p>
            <Stats>
              <div>
                <GoStar /> {node.stargazers.totalCount}
              </div>
              <div>
                <GoRepoForked /> {node.forkCount}
              </div>
            </Stats>
            <Button href={node.url} target="_blank" rel="noopener noreferrer">
              <FaGithub></FaGithub> Github
            </Button>
          </Item>
        ))}
      </Projects>
    </Wrapper>
  );
};
