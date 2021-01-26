import Queue from '../队列/queue.js';
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

const breadthFirstSearch = (graph, startVertex, callback) => {
  
  const vertices = graph.getVerices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  const queue = new Queue()

  queue.enqueue(startVertex)
  while(!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY
    for(let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if(color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
    if(callback){
      callback(u)
    }
  }
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

console.log(graph.toString());

console.log('********* bfs with callback ***********');

const printVertex = (value) => console.log('Visited vertex: ' + value);

breadthFirstSearch(graph, myVertices[0], printVertex);