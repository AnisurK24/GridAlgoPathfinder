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

export default Node;
