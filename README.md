# nocake
nocake is a JavaScript (ES6/ES2015) collections library including **Stack**, **Queue**, and **PriorityQueue** data structures.

## Examples
```js
import {Stack, Queue, PriorityQueue, PromiseQueue} from 'nocake';
let s = new Stack();
s.push(1);
s.push(2);
s.pop(); //=> 2

let q = new Queue();
s.enqueue(1);
s.enqueue(2);
s.dequeue(); //=> 1

let pq = new PriorityQueue((a, b) => {
  if (a.priority < b.priority) {
    return 1
  }
  if (a.priority > b.priority) {
    return -1
  }
  return 0
});
// enqueue(element[, priority])
pq.enqueue(1);
pq.enqueue(3);
pq.enqueue(2);
pq.dequeue(); //=> {element: 3, priority: 3}
pq.dequeue(); //=> {element: 2, priority: 2}

const promisequeue = new PromiseQueue({concurrency: 1});

const asyncTask = (time) => () => { return new Promise(resolve => {
  setTimeout(resolve, time)
})};

promisequeue.add(asyncTask(1000), { priority: 1 }).then(() => {
  console.log('async task 1000 Done');
});

promisequeue.add(asyncTask(2000), { priority: 2 }).then(() => {
  console.log('async task 2000 Done');
});

promisequeue.add(asyncTask(3000), { priority: 3 }).then(() => {
  console.log('async task 3000 Done');
});

// async task 1000 Done
// async task 3000 Done
// async task 2000 Done

```

## Installation

```
npm install --save nocake
```

## Usage
You can import one or multiple collections from `nocake`:

```js
import {Stack, Queue, PriorityQueue, PromiseQueue} from 'nocake';
// or
const {Stack, Queue, PriorityQueue, PromiseQueue} = require('nocake');
```
