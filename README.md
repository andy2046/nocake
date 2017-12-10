# nocake
nocake is a JavaScript collections library including **Stack**, **Queue**, **PriorityQueue**, **PromiseQueue** and **LinkedList** data structures.

## Examples
```js
import { Stack, Queue, PriorityQueue, PromiseQueue,
  LinkedList, DoublyLinkedList, CircularLinkedList } from 'nocake';

let s = new Stack();
s.push(1);
s.push(2);
s.pop(); //=> 2

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.dequeue(); //=> 1

let pq = PriorityQueue.of((a, b) => {
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

const promisequeue = PromiseQueue.of({ concurrency: 1 });

const asyncTask = (time) => () => { return new Promise(resolve => {
  setTimeout(resolve, time)
})};

promisequeue.add(asyncTask(1000), { priority: 1 }).then(() => {
  console.log('async task 1000 Done');
});

promisequeue.addAll([asyncTask(2000), asyncTask(4000)], { priority: 2 }).then(() => {
  console.log('async task 2000/4000 Done');
});

promisequeue.add(asyncTask(3000), { priority: 3 }).then(() => {
  console.log('async task 3000 Done');
});

// async task 1000 Done
// async task 3000 Done
// async task 2000/4000 Done

```

## Installation

```
npm install --save nocake
```

## Usage
You can import one or multiple collections from `nocake`:

```js
import { Stack, Queue, PriorityQueue, PromiseQueue,
  LinkedList, DoublyLinkedList, CircularLinkedList } from 'nocake';
// or
const { Stack, Queue, PriorityQueue, PromiseQueue,
  LinkedList, DoublyLinkedList, CircularLinkedList } = require('nocake');
```
