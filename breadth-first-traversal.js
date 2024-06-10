const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

const start = 2;


function breadthFirstTraversal(start) {

let queue = [start];
let visited = new Set();
visited.add(start)

while (queue.length > 0) {
let currentNode = queue.shift()
console.log(currentNode)

let neighbors = adjList[currentNode]
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
visited.add(neighbor)
queue.push(neighbor)
}
}
}
}

const target = 6

function depthFirstSearch(start) {

let queue = [start];
let visited = new Set();
visited.add(start);

while (queue.length > 0) {
let currentNode = queue.shift()
if (currentNode === target) return true

let neighbors = adjList[currentNode];
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
visited.add(neighbor);
queue.push(neighbor)
}
}
}
return false;
}