import Grid from "./grid";
import Util from "./util";

class GridView {
    constructor($el) {
        this.$el = $el;
        this.grid = new Grid();
        this.gridSize = 80;
        // this.createGrid();
        this.setupGrid = this.setupGrid.bind(this);

        this.setupGrid($el);
    }

    setupGrid(){
        let html = '';

        for (let row = 0; row < this.grid.height; row++) {
            html += '<tr>';
            for (let col = 0; col < this.grid.width; col++) {
                let nodeId = `${row}-${col}`;
                html += `<td id="${nodeId}"></td>`;
            }
            html =+ '</tr>';
        }
        this.$el.html(html);
        this.$td = this.$el.find("td");
    }


//     createGrid() {
//       let gridSize = this.gridSize;
//       console.log(gridSize);
//       let tableHTML = "";
//       for (let row = 0; row < gridSize; row++) {
//           let currentArrayRow = [];
//           let currentHTMLRow = `<tr id="row-${row}">`;
//           for (let col = 0; col < gridSize; col++) {
//               let nodeId = `${row}-${col}`;
//               let nodeClass;
//               let newNode;
//               // if (row === Math.floor(this.height / 4) && col === Math.floor(this.width / 4)) {
//               //     nodeClass = "start";
//               //     this.start = `${nodeId}`;
//               // } else if (row === Math.floor(this.height / 6) && col === Math.floor(3 * this.width / 6)) {
//               //     nodeClass = "end";
//               //     this.target = `${nodeId}`;
//               // } else {
//               //     nodeClass = "unvisited";
//               // }
//             //   newNode = new Node(nodeId, nodeClass);
//               currentArrayRow.push(newNode);
//               let width = (($graph.width() / gridSize) - 1);
//               let height = (($graph.width() / gridSize) - 1);
//               currentHTMLRow += `<td id="${nodeId}" class="${nodeClass}" width="${width}" height="${height}"></td>`;
//               this.nodes[`${nodeId}`] = newNode;
//           }
//           this.board.push(gridRow);
//           grid += `${tableRow}</tr>`;
//       }
//       // let board = document.getElementById("board");
//       board.innerHTML = tableHTML;
//   }
}



export default GridView;