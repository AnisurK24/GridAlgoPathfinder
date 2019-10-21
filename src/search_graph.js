// import Node from "./node";


class SearchGraph {
//   constructor(nodes) {
//     this.nodes = [];
//     this.grid = [];

//     for (let x = 0; x < nodes.length; x++) {
//       this.grid[x] = [];

//       for (let y = 0, row = nodes[x]; y < row.length; y++) {
//         let node = new Node(x, y, row[y]);
//         this.grid[x][y] = node;
//         this.nodes.push(node);
//       }
//     }
//   }

//   neighbors(node) {
//     const allNeighbors = [];
//     const x = node.x;
//     const y = node.y;
//     const grid = this.grid;

//     // Manhattan neighbors
//     if (grid[x - 1] && grid[x - 1][y]) {
//       allNeighbors.push(grid[x - 1][y]);
//     }

//     if (grid[x + 1] && grid[x + 1][y]) {
//       allNeighbors.push(grid[x + 1][y]);
//     }

//     if (grid[x] && grid[x][y - 1]) {
//       allNeighbors.push(grid[x][y - 1]);
//     }

//     if (grid[x] && grid[x][y + 1]) {
//       allNeighbors.push(grid[x][y + 1]);
//     }

//     return allNeighbors;
//   }

      constructor(id, nodes, grid) {
          this.nodes = nodes;
          this.id = id;
          this.grid = grid;
      }

      getNeighbors(id, nodes, grid) {
          const neighborNodes = [];
          const coordinates = id.split("-");
          const row = parseInt(coordinates[0]);
          const col = parseInt(coordinates[1]);
          //   const grid = this.grid;

              if (grid[row - 1] && grid[row - 1][col]) {
              neighborNode = `${(row - 1).toString()}-${col.toString()}`;
                  if (nodes[neighborNode].status !== "block") {
                      if (document.getElementById("BFS").checked) {
                      neighborNodes.push(neighborNode);
                      } else {
                      neighborNodes.unshift(neighborNode);
                      }
                  }
              }
              if (grid[col + 1] && grid[row][col + 1]) {
              neighborNode = `${row.toString()}-${(col + 1).toString()}`;
                  if (nodes[neighborNode].status !== "block") {
                      if (document.getElementById("BFS").checked) {
                      neighborNodes.push(neighborNode);
                      } else {
                      neighborNodes.unshift(neighborNode);
                      }
                  }
              }
              if (grid[row + 1] && grid[row + 1][col]) {
              neighborNode = `${(row + 1).toString()}-${col.toString()}`;
                  if (nodes[neighborNode].status !== "block") {
                      if (document.getElementById("BFS").checked) {
                      neighborNodes.push(neighborNode);
                      } else {
                      neighborNodes.unshift(neighborNode);
                      }
                  }
              }
              if (grid[col - 1] && grid[row][col - 1]) {
              neighborNode = `${row.toString()}-${(col - 1).toString()}`;
                  if (nodes[neighborNode].status !== "block") {
                      if (document.getElementById("BFS").checked) {
                      neighborNodes.push(neighborNode);
                      } else {
                      neighborNodes.unshift(neighborNode);
                      }
                  }
              }
          return neighborNodes;
      }
}

export default SearchGraph;