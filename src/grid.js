// import BuildTree from "./search.js";
import Node from "./node";
// import BFSDFS from "./BFSDFS";
// import SearchGraph from "./search_graph";
// import SearchGraph from "./search_graph";
// import AStar from "./astar";
import BFS from "./BFS";
import DFS from "./DFS";


class Grid {
  constructor($graph) {
    this.$graph = $graph;

    this.grid = [];
    this.nodeObject = {};
    this.start = null;
    this.goal = null;

    this.width = this.checkWidth();
    this.height = this.checkHeight();
    this.gridSize = this.checkGridSize();
    this.gridStyle = this.checkGridGen();
    this.clearGrid = this.clearGridBtn();
    this.algo = this.checkAlgo();
    this.startSearch = this.startAlgo();
    console.log(this.$graph);
    console.log(this.nodeObject);
    console.log(this.grid);

    $graph.empty();
    this.newGrid($graph);

    // this.newGrid = this.newGrid.bind(this);

    // this.searchGraph = new SearchGraph(this.nodes);
    // this.$cells = $graph.find(".walkable");
    // this.$cells.bind("click", e => this.clickCell($(e.target)));
  }

  newGrid($graph) {
    const height = this.height;
    const width = this.width;
    const gridSize = this.gridSize;
    const $cellHTML = $("<td />");

    $cellHTML
      .width($graph.width() / gridSize - 1)
      .height($graph.width() / gridSize - 1);

    for (let row = 0; row < height; row++) {
      let $rowHTML = $("<tr />").addClass("grid-row");
      // const currentNodeRow = [];
      // const currentNodeORow = [];
      const currentGridRow = [];

      for (let col = 0; col < width; col++) {
        const newNodeId = `${row}-${col}`;
        let newNodeClass;
        let newNode;

        let $cell = $cellHTML.clone();
        $cell
          .attr("id", newNodeId);
          // .attr("x", row)
          // .attr("y", col);

        if (row === 1 && col === 1) {
          newNodeClass = "start";
          $cell.addClass("start");
          this.start = new Node(newNodeId, newNodeClass);
          // $cell.addClass("fas fa-dog");
        } else if (row === 8 && col === 8) {
          newNodeClass = "goal";
          $cell.addClass("goal");
          this.goal = new Node(newNodeId, newNodeClass);
          // $cell.addClass("fas fa-user");
        } else {
          $cell.addClass("walkable");
          newNodeClass = "walkable";
        }

        newNode = new Node(newNodeId, newNodeClass);
        // currentNodeRow.push(newNode);
        $rowHTML.append($cell);
        currentGridRow.push($cell);
        this.nodeObject[`${newNodeId}`] = newNode;
      }

      this.grid.push(currentGridRow);
      // this.nodes.push(currentNodeRow);
      $graph.append($rowHTML);
    }
  }

  checkGridSize() {
    if (document.getElementById("grids_1").checked) {
      return 50;
    } else if (document.getElementById("grids_2").checked) {
      return 75;
    } else {
      return 100;
    }
  }

  checkHeight() {
    if (this.checkGridSize() === 50) {
      return 17;
    } else if (this.checkGridSize() === 75) {
      return 25;
    } else {
      return 33;
    }
  }

  checkWidth() {
    if (this.checkGridSize() === 50) {
      return 42;
    } else if (this.checkGridSize() === 75) {
      return 62;
    } else {
      return 82;
    }
  }

  clearGridBtn() {
    document.getElementById("CGrid").onclick = () => {
      this.clearWalls();
      // console.log("text");
    };
  }

  clearWalls() {
    Object.keys(this.nodeObject).forEach(node => {
      let nodeHTML = document.getElementById(node);
      let currentNode = this.nodeObject[node];
      if (currentNode.status === "block") {
        currentNode.status = "walkable";
        nodeHTML.className = "walkable";
      }
    });
  }

  checkGridGen() {
    document.getElementById("PGrid").onclick = () => {
      if (document.getElementById("gridg_1").checked) {
        console.log(this.grid);
        this.clearWalls();
        this.randomGridGen();
      } else {
        this.clearWalls();
        this.mazeGridGen();
      }
    };
  }

  randomGridGen() {
    Object.keys(this.nodeObject).forEach(node => {
      let nodesToSkip = ["start", "goal"];
      let nodeHTML = document.getElementById(node);
      let blocked = Math.floor(Math.random() * 4);
      if (!nodesToSkip.includes(nodeHTML.className) && blocked === 0) {
        nodeHTML.className = "block";
        this.nodeObject[node].status = "block";
      }
    });
  }

  mazeGridGen() {
    // let outline = false;
    // if (!outline) {
      Object.keys(this.nodeObject).forEach(node => {
        let nodesToSkip = ["start", "goal"];
        let nodeHTML = document.getElementById(node);
      if (!nodesToSkip.includes(nodeHTML.className)) {
        let row = parseInt(node.split("-")[0]);
        let col = parseInt(node.split("-")[1]);
        let nodeHTML = document.getElementById(node);
        if (
          row === 0 ||
          col === 0 ||
          row === this.height - 1 ||
          col === this.width - 1
        ) {
          nodeHTML.className = "block";
          // console.log(nodeHTML);
          this.nodeObject[node].status = "block";
        }
        // outline = true;
      }
    });
    // }
  }

  checkAlgo() {
    // document.getElementById("StartButton").onclick = () => {
      if (document.getElementById("BFS").checked) {
        return BFS;
      } else if (document.getElementById("DFS").checked) {
        return BFS;
      }
    // };
  }

  startAlgo() {
    document.getElementById("StartButton").onclick = () => {
      // console.log("startAlgobutton");
      // this.$start = this.$cells.filter(".start");
      this.algo = this.checkAlgo();
      let algoObj = new this.algo(this.nodeObject, this.start, this.goal, this.grid);
      let {path, visitedNodes} = algoObj.search();
      this.path = path;
      this.highlightVisited(visitedNodes, 0);
    };
  }

  highlightVisited(visitedNodes, i) {
    // console.log(visitedNodes[i].id);
    setInterval(() => {
      let j = i;
      while (j < visitedNodes.length - 1) {
        let nodeHTML = document.getElementById(visitedNodes[j].id);
        nodeHTML.className = "visited";
      j++;
      // if (i < visitedNodes.length - 1) {
        // this.highlightVisited(visitedNodes, i+1);
      }
      }, 1000);
  }

}

export default Grid;

