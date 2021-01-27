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

export const DFS = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const d = {}
  const f = {}
  const p = {}
  const time = { count: 0 } //使用对象，因为原始值的作用域只存在于函数执行过程中，需要在全局中使用
  // var time = 0 不可以用原始值，var let都不行

  // 这里的遍历与下面的遍历不同，下面的遍历只会执行到i=0
  for(let i = 0; i < vertices.length; i++){ 
    d[vertices[i]] = 0
    f[vertices[i]] = 0
    p[vertices[i]] = null
  }

  for(let i = 0; i < vertices.length; i++) {
    if(color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList, callback)
    }
  }

  return {
    discover: d,
    finished: f,
    predecessors: p
  }
}

// 注意递归，栈调用
const DFSVisit = (u, color, d, f, p, time, adjList, callback) => {
  color[u] = Colors.GREY
  d[u] = ++time.count
  if (callback) {
    callback(u)
  }
  const neighbors = adjList.get(u)
  for(let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    p[w] = u
    if(color[w] === Colors.WHITE) {
      DFSVisit(w, color, d, f, p, time, adjList, callback)
    }
  }
  color[u] = Colors.BLACK
  f[u] = ++time.count
}

// const graph = new Graph();

// const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// for (let i = 0; i < myVertices.length; i++) {
//   graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// // console.log('********* printing graph ***********');

// // const printVertex = (value) => console.log('Visited vertex: ' + value);
// let a = DFS(graph)
// console.log(a)



