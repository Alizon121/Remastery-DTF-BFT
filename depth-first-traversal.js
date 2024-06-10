//Implement a depth-first search and traversal of both a tree and a graph using the pseudo-code from the depth-first overview reading.

// DFT Search and Traversal

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

const start = 2;


function depthFirstTraversal(start) {

let stack = [start];
let visited = new Set();
visited.add(start)

while (stack.length > 0) {
let currentNode = stack.pop()
console.log(currentNode)

let neighbors = adjList[currentNode]
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
visited.add(neighbor)
stack.push(neighbor)
}
}
}
}

const target = 6

function depthFirstSearch(start) {

let stack = [start];
let visited = new Set();
visited.add(start);

while (stack.length > 0) {
let currentNode = stack.shift()
if (currentNode === target) return true

let neighbors = adjList[currentNode];
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
visited.add(neighbor);
stack.push(neighbor)
}
}
}
return false;
}