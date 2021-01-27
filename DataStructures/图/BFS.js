import Queue from '../队列/queue.js';
import Stack from '../栈/stack.js'
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

// 图广度优先遍历优化版，增加获取从最短路径，前溯点
const BFS = (graph, startVertex, callback) => {

  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  const queue = new Queue()
  const distances = {} // 存储最短路径键值对
  const predecessors = {} //存储前溯点

  queue.enqueue(startVertex)

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        distances[w] = distances[u] + 1
        predecessors[w] = u
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }
  return {
    distances,
    predecessors
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

// console.log('********* printing graph ***********');

// console.log(graph.toString());

console.log('********* sorthest path - BFS ***********');

const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

//from A to all other vertices
const fromVertex = myVertices[0];

for (let i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i];
  const path = new Stack();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}


