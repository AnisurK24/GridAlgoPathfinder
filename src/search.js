import Node from "./node.js";

class BuildTree {
  constructor(nodes) {
    this.nodes = [];
    this.grid = [];

    for (let x = 0; x < nodes.length; x++) {
      this.grid[x] = [];

      for (let y = 0, row = nodes[x]; y < row.length; y++) {
        let node = new Node(x, y, row[y]);
        this.grid[x][y] = node;
        this.nodes.push(node);
      }
    }
  }

  neighbors(node) {
    const neighborNodes = [];
    const x = node.x;
    const y = node.y;
    const grid = this.grid;

    if (grid[x - 1] && grid[x - 1][y]) {
      neighborNodes.push(grid[x - 1][y]);
    }

    if (grid[x + 1] && grid[x + 1][y]) {
      neighborNodes.push(grid[x + 1][y]);
    }

    if (grid[x] && grid[x][y - 1]) {
      neighborNodes.push(grid[x][y - 1]);
    }

    if (grid[x] && grid[x][y + 1]) {
      neighborNodes.push(grid[x][y + 1]);
    }

    return neighborNodes;
  }
}

export default BuildTree;