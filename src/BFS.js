class BFS {
  constructor(nodes, start, goal, grid) {
    this.nodes = nodes;
    this.grid = grid;
    // this.height = height;
    // this.width = width;
    this.start = start;
    this.goal = goal;
    // console.log(this.grid);
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
    start.visited = true;
    while (queue.length > 0) {
        let node = queue.shift();

      if (node.id === goal.id) {
        let path = [];
        let currentNode = node;

        
        while (currentNode.parent) {
          path.push(currentNode);
          currentNode = currentNode.parent;
        }
        
        // console.log(grid);
        return { path: path.reverse(), visitedNodes: closedSet };
      }
      // console.log(goal.id);
      // console.log(node.id);

      const coordinates = node.id.split("-");
      const row = parseInt(coordinates[0]);
      const col = parseInt(coordinates[1]);

      // let nodeHTML = document.getElementById(node.id);
      // console.log(nodeHTML);
      if (node.id !== start.id) {
        // nodeHTML.className = "visited";
        node.visited = true;
        closedSet.push(node);
      }

      // let neighborNodes = [];
      let neighborNode;
      if (grid[row - 1] && grid[row - 1][col]) {
        neighborNode = `${(row - 1).toString()}-${col.toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                queue.push(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
          }
      }
      if (grid[col + 1] && grid[row][col + 1]) {
        neighborNode = `${row.toString()}-${(col + 1).toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                queue.push(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
          }
      }
      if (grid[row + 1] && grid[row + 1][col]) {
        neighborNode = `${(row + 1).toString()}-${col.toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                queue.push(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
          }
      }
      if (grid[col - 1] && grid[row][col - 1]) {
        neighborNode = `${row.toString()}-${(col - 1).toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                queue.push(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
          }
      }


      // for (let i = 0; i < neighborNodes.length; i++) {
        // let neighbor = neighborNodes[i];

        // if (n.closed || n.weight === 0) continue;

        // if (!neighbor.visited) {
          // n.visited = true;
          // neighbor.parent = currNode;
          // queue.push(neighbor);
        // }
      // }
    }
  }
}

export default BFS;