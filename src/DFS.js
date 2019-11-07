class DFS {
  constructor(nodes, start, goal, grid) {
    this.nodes = nodes;
    this.grid = grid;
    this.start = start;
    this.goal = goal;
    console.log(grid);
    console.log(nodes);
    Object.keys(this.nodes).forEach(node => {
      let currentNode = this.nodes[node];
      currentNode.visited = false;
      currentNode.parent = null;
    });
  }

  search() {
    let nodes = this.nodes;
    let start = this.start;
    let goal = this.goal;
    let grid = this.grid;
    let closedSet = [];
    

    let stack = [start];
    start.visited = true;

    while (stack.length > 0) {
        let node = stack.shift();

      if (node.id === goal.id) {
        let path = [];
        let currentNode = node;

        
        while (currentNode.parent) {
          path.push(currentNode.id);
          currentNode = currentNode.parent;
        }
        
        return { path: path.reverse(), visitedNodes: closedSet };
      }
      
      const coordinates = node.id.split("-");
      const row = parseInt(coordinates[0]);
      const col = parseInt(coordinates[1]);

      if (node.id !== start.id) {
        closedSet.push(node.id);
      }

      let neighborNode;
      if (grid[0][col - 1] && grid[row][col - 1]) {
        neighborNode = `${row.toString()}-${(col - 1).toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                stack.unshift(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
                nodes[neighborNode].visited = true;
          }
      }
      if (grid[row + 1] && grid[row + 1][col]) {
        neighborNode = `${(row + 1).toString()}-${col.toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                stack.unshift(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
                nodes[neighborNode].visited = true;
          }
      }
      if (grid[0][col + 1] && grid[row][col + 1]) {
        neighborNode = `${row.toString()}-${(col + 1).toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                stack.unshift(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
                nodes[neighborNode].visited = true;
          }
      }
      if (grid[row - 1] && grid[row - 1][col]) {
        neighborNode = `${(row - 1).toString()}-${col.toString()}`;
          if (nodes[neighborNode].status !== "block" && !nodes[neighborNode].visited) {
                stack.unshift(nodes[neighborNode]);
                nodes[neighborNode].parent = node;
                nodes[neighborNode].visited = true;
          }
      }
    }
  }
}

export default DFS;
