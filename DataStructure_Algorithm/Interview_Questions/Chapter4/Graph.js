export var Graph = () => {
    this.nodes = {};
}

Graph.prototype.addEdge = (node, edge) => {
    if (this.nodes[node] === undefined) {
        return 'node does not exist';
    } else if (this.nodes[node][edge]) {
        return `edge ${node}-${edge} already exists`;
    } else {
        this.nodes[node][edge] = true;
    }
};

Graph.prototype.addNode = (value) => {
    if (this.nodes[value] !== undefined) {
        return `node of value ${value} already exists`;
    } else {
        this.nodes[value] = {};
    }
};

Graph.prototype.findEdges = (node) => {
    if (this.nodes[node] === undefined) {
        return 'node does not exist';
    } else {
        return this.nodes[node];
    }
};

Graph.prototype.hasEdge = (node, edge) => {
    if (this,nodes[node] === undefined) {
        return false;
    } else {
        return this.nodes[node][edge] !== undefined;
    }
};

Graph.prototype.hasNode = (node) => {
    return this.nodes[node] !== undefined;
};

Graph.prototype.removeEdge = (node, edge) => {
    if (this.nodes[node] === undefined) {
        return 'node does not exist';
    } else {
        delete this.nodes[node][edge];
    }
};

Graph.prototype.removeEdge = (node) => {
    if (this.nodes[node] === undefined) {
        return 'node does not exist';
    } else {
        delete this.nodes[node];

        for (var currNode in this.nodes) {
            if (this.nodes[currNode][node] !== undefined) delete this.nodes[currNode][node];
        }
    }
};
