class BFS {
  constructor(nodes, start, goal, grid) {
    this.nodes = nodes;
    this.grid = grid;
    this.height = height;
    this.width = width;
    this.start = start;
    this.goal = goal;

    // for (let row = 0; row < this.height; row++) {
    //   for (let col = 0; col < this.width; col++) {
    //     if (this.grid[row][col].class === start) {
    //       this.start = this.grid[row][col];
    //     } else if (this.grid[row][col].class === goal) {
    //       this.goal = this.grid[row][col];
    //     }
    //   }
    // }
  }

  search() {
    let nodes = this.nodes;
    let start = this.start;
    let goal = this.goal;
    let grid = this.grid;
    let closedSet = [];
    

    let queue = [start];

    while (queue.length > 0) {
      let node = queue.shift();

      if (node.id === goal.id) {
        let path = [];
        let currNode = node;

        while (currNode.parent) {
          path.push(currNode);
          currNode = currNode.parent;
        }

        return { path: path.reverse(), closedSet: closedSet };
      }

      const coordinates = currNode.id.split("-");
      const row = parseInt(coordinates[0]);
      const col = parseInt(coordinates[1]);

      let nodeHTML = document.getElementById(currNode);
      nodeHTML.className = "visited";
      currNode.visited = true;
      closedSet.push(currNode);

      // let neighborNodes = [];

      // if (grid[row - 1] && grid[row - 1][col]) {
      //   neighborNode = `${(row - 1).toString()}-${col.toString()}`;
      //     if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
      //         if (document.getElementById("BFS").checked) {
      //         neighborNodes.push(neighborNode);
      //         } else {
      //         neighborNodes.unshift(neighborNode);
      //         }
      //     }
      // }
      // if (grid[col + 1] && grid[row][col + 1]) {
      //   neighborNode = `${row.toString()}-${(col + 1).toString()}`;
      //     if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
      //         if (document.getElementById("BFS").checked) {
      //         neighborNodes.push(neighborNode);
      //         } else {
      //         neighborNodes.unshift(neighborNode);
      //         }
      //     }
      // }
      // if (grid[row + 1] && grid[row + 1][col]) {
      //   neighborNode = `${(row + 1).toString()}-${col.toString()}`;
      //     if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
      //         if (document.getElementById("BFS").checked) {
      //         neighborNodes.push(neighborNode);
      //         } else {
      //         neighborNodes.unshift(neighborNode);
      //         }
      //     }
      // }
      // if (grid[col - 1] && grid[row][col - 1]) {
      //   neighborNode = `${row.toString()}-${(col - 1).toString()}`;
      //     if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
      //         if (document.getElementById("BFS").checked) {
      //         neighborNodes.push(neighborNode);
      //         } else {
      //         neighborNodes.unshift(neighborNode);
      //         }
      //     }
      // }


      for (let i = 0; i < neighbors.length; i++) {
        let n = neighbors[i];

        if (n.closed || n.weight === 0) continue;

        if (!n.visited) {
          n.visited = true;
          n.parent = currNode;
          queue.push(n);
        }
      }
    }
  }
}

export default BFS;