

class BFSDFS {
  constructor(nodes, start, goal, grid) {
    this.nodes = nodes;
    this.start = start;
    this.goal = goal;
    this.grid = grid;
  }

    searchGrid() {
        const nodes = this.nodes;
        const start = this.start;
        const goal = this.goal;
        const grid = this.grid;
        let queue = [nodes[start]];
        let visitedNodes = {start: true};
        debugger;
        while (queue.length) {
            let currentNode;
            if (document.getElementById("BFS").checked) {
                currentNode = queue.shift();
            } else {
                currentNode = queue.pop();
            }



            let nodeHTML = document.getElementById(nodes[currentNode.id]);
            if (document.getElementById("DFS").checked) {
                visitedNodes[currentNode.id] = true;
                currentNode.status = "visited";
                nodeHTML.className = "visited";
            }
            if (currentNode.id === goal) {
                // return "success";
                console.log("success");
            }
            let currentNeighbors = this.getNeighbors(currentNode.id, nodes, grid);
            currentNeighbors.forEach(neighbor => {
                if (visitedNodes[neighbor] === false) {
                    if (document.getElementById("BFS").checked) {
                        visitedNodes[neighbor] = true;
                        nodes[neighbor].previousNode = currentNode.id;
                        queue.push(nodes[neighbor]);
                    }
                }
            });
        }
    }
}

export default BFSDFS;