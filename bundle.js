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

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
// import BuildTree from "./search.js";




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
  const grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"]($("#grid"));

  const $newGridBtn = document.getElementById("GGrid");
  $newGridBtn.addEventListener("click", () => new _grid__WEBPACK_IMPORTED_MODULE_0__["default"]($("#grid")));

});


console.log("Webpack is working!");

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
      this.previousNode = null;
      this.weight = 0;
      this.path = null;
    // this.x = x;
    // this.y = y;
    // this.pos = { x: this.x, y: this.y };
    // this.weight = weight;

    // this.f = 0;
    // this.g = 0;
    // this.h = 0;

    // this.visited = false;
    // this.closed = false;
    // this.parent = null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Node);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map