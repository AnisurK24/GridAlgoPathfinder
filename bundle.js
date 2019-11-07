/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BFS.js":
/*!********************!*\
  !*** ./src/BFS.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (BFS);

/***/ }),

/***/ "./src/DFS.js":
/*!********************!*\
  !*** ./src/DFS.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DFS {
  constructor(graph, start, end) {
    this.start = start;
    this.end = end;
    this.graph = graph;

    for (let x = 0; x < this.graph.length; x++) {
      for (let y = 0; y < this.graph[x].length; y++) {
        this.graph[x][y].parent = null;
      }
    }
  }

  search() {
    const graph = this.graph;
    const start = this.start;
    const end = this.end;
    const closedSet = [];

    let stack = [[start, []]];

    while (stack.length > 0) {
      let currState = stack.pop();
      let currNode = currState[0];
      let currPath = currState[1];

      if (currNode.x === end.x && currNode.y === end.y) {
        return { path: currPath, closedSet: closedSet };
      }

      if (currNode.closed) {
        continue;
      }

      let neighbors = graph.neighbors(currNode);
      for (let i = 0; i < neighbors.length; i++) {
        let n = neighbors[i];

        if (n.weight === 0) continue;

        if (n.x === end.x && n.y === end.y) {
          return {
            path: currPath.concat([n]),
            closedSet: closedSet.concat([currNode])
          };
        }

        if (!n.visited) {
          n.visited = true;
          n.parent = currNode;
          stack.push([n, currPath.concat([n])]);
        }
      }

      currNode.closed = true;
      closedSet.push(currNode);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DFS);


/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _BFS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BFS */ "./src/BFS.js");
/* harmony import */ var _DFS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DFS */ "./src/DFS.js");
// import BuildTree from "./search.js";

// import BFSDFS from "./BFSDFS";
// import SearchGraph from "./search_graph";
// import SearchGraph from "./search_graph";
// import AStar from "./astar";




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
          this.start = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](newNodeId, newNodeClass);
          // $cell.addClass("fas fa-dog");
        } else if (row === 8 && col === 8) {
          newNodeClass = "goal";
          $cell.addClass("goal");
          this.goal = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](newNodeId, newNodeClass);
          // $cell.addClass("fas fa-user");
        } else {
          $cell.addClass("walkable");
          newNodeClass = "walkable";
        }

        newNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](newNodeId, newNodeClass);
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
        return _BFS__WEBPACK_IMPORTED_MODULE_1__["default"];
      } else if (document.getElementById("DFS").checked) {
        return _BFS__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/* harmony default export */ __webpack_exports__["default"] = (Grid);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");



$(document).ready(() => {
  new _grid__WEBPACK_IMPORTED_MODULE_0__["default"]($("#grid"));
  // console.log(Grid);
  const $newGridBtn = document.getElementById("GGrid");
  $newGridBtn.addEventListener("click", () => new _grid__WEBPACK_IMPORTED_MODULE_0__["default"]($("#grid")));

});


// console.log("Webpack is working!");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Node {
  constructor(id, status) {
      this.id = id;
      this.status = status;
      // this.previousNode = null;
      this.weight = 0;
      // this.path = null;
      // this.x = x;
      // this.y = y;
    // this.pos = { x: this.x, y: this.y };
    // this.weight = weight;

    // this.f = 0;
    // this.g = 0;
    // this.h = 0;

    this.visited = false;
    // this.closed = false;
    this.parent = null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Node);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map