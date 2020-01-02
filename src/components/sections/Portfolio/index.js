import React from 'react';

import { Wrapper } from './styles';

export const Portfolio = () => (
  <Wrapper id="portfolio">
    <h1>Portfolio</h1>
    <p>Some of my projects</p>
    <div>
      <h2>Project 1</h2>
      <p>This is project description text.</p>
    </div>
    <div>
      <h2>Project 2</h2>
      <p>This is project description text.</p>
    </div>
    <div>
      <h2>Project 3</h2>
      <p>This is project description text.</p>
    </div>
    <div>
      <h2>Project 4</h2>
      <p>This is project description text.</p>
    </div>
  </Wrapper>
);


/*  EXAMPLE GITHUB QUERY  

{
  viewer {
    login
    starredRepositories(first: 100, ownedByViewer: true) {
      edges {
        node {
          id
          name
          description
          homepageUrl
          url
          isPrivate
          languages(first: 10) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}

query {
  repository(name: "repoName", owner: "repoOwner") {
    object(expression: "branch:path/to/file") {
      ... on Blob {
        text
      }
    }
  }
}

{
  viewer {
    login
    starredRepositories(first: 100, ownedByViewer: true) {
      edges {
        node {
          id
          name
          description
          homepageUrl
          url
          isPrivate
          object(expression: "master:screenshot.png") {
            ... on Blob {
              id
            }
          }
          languages(first: 3) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}



*/