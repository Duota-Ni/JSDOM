import Graph from './graph.js'
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}

const initializeColor = vertices => {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  for(let i = 0; i < vertices.length; i++) {
    if(color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

// 注意递归，栈调用
const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY
  if (callback) {
    callback(u)
  }
  const neighbors = adjList.get(u)
  for(let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    if(color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Colors.BLACK
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log('********* printing graph ***********');

const printVertex = (value) => console.log('Visited vertex: ' + value);
depthFirstSearch(graph, printVertex)