// import BuildTree from "./search.js";
import Node from "./node";



class Grid {
  constructor($graph) {
    this.$graph = $graph;

    this.grid = [];
    // this.nodes = [];
    this.nodeObject = {};
    this.start = null;
    this.goal = null;

    // this.height = 25;
    // this.width = 62;
    // this.gridSize = 75;

    this.width = this.checkWidth();
    this.height = this.checkHeight();
    this.gridSize = this.checkGridSize();
    this.gridStyle = this.checkGridGen();
    this.clearGrid = this.clearGridBtn();
    // console.log(this.nodes);
    console.log(this.nodeObject);

    $graph.empty();

    // this.newGrid = this.newGrid.bind(this);
    this.newGrid($graph);

    // this.searchGraph = new SearchGraph(this.nodes);
    // this.$cells = $graph.find(".grid-cell");
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
      const currentNodeORow = [];
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
          this.start = `${newNodeId}`;
          // $cell.addClass("fas fa-dog");
        } else if (row === height - 2 && col === width - 2) {
          newNodeClass = "goal";
          $cell.addClass("goal");
          this.goal = `${newNodeId}`;
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
    let nodesToSkip = [this.grid.start, this.grid.goal];
    // let outline = false;
    // if (!outline) {
      Object.keys(this.nodeObject).forEach(node => {
        if (!nodesToSkip.includes(node)) {
          let row = parseInt(node.split("-")[0]);
          let col = parseInt(node.split("-")[1]);
          let nodeHTML = document.getElementById(node);
          if (row === 0 || col === 0 || row === this.height - 1 || col === this.width - 1) {
            nodeHTML.className = "block";
            // console.log(nodeHTML);
            this.nodeObject[node].status = "block";
          }
          // outline = true;
        }
      });
    // }
  }
}

export default Grid;

