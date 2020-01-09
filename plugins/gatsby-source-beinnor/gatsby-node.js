const fetch = require('node-fetch');
const https = require('https');
const fs = require('fs');

const download = async (url, localDest) => {
  try {
    const res = await fetch(url);
    const dest = fs.createWriteStream(`src/images/screenshots/${localDest}`);
    res.body.pipe(dest);
    console.log(`Writing ${localDest} ***`);
  } catch (error) {
    console.log(`Error! Couldn't get image file: ${error}`);
    return false;
  }
  return true;
};

const query = `
{
  repositoryOwner(login: "beinnor") {
    ... on User {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              owner {
                login
              }
              description
              forkCount
              stargazers {
                totalCount
              }
              homepageUrl
              resourcePath
              url
            }
          }
        }
      }
    }
  }
}
`;

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // Fetch the data
    const res = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer 378b9002eca231025ee528c8e28e5276ab62a548',
      },
      body: JSON.stringify({ query: query }),
    });

    // Transform the data into json
    const { data } = await res.json();

    const edges = data.repositoryOwner.pinnedItems.edges;

    // Map over the results array, calling action.createNode on each item in the array
    for (const repo of edges) {
      const node = {
        ...repo, // We copy all of the properties from the game object
        id: await createNodeId(`repo-${repo.node.id}`), // Needs to be unique
        internal: {
          type: 'Repo',
          contentDigest: createContentDigest(repo), // We pass in the game object to make sure it's unique
        },
      };

      // Create the actual data node
      await actions.createNode(node);

      await download(
        `https://raw.githubusercontent.com/beinnor/${repo.node.name}/master/screenshot.png`,
        `screenshot-${repo.node.name}.png`
      );
    }
  } catch (error) {
    console.log(`Error in plugin: ${error}`);
  }
};
