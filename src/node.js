class Node {
  constructor(id, status) {
      this.id = id;
      this.status = status;
      // this.weight = 0;
      


    this.visited = false;
    this.parent = null;
  }
}

export default Node;
