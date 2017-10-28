# nocake
nocake is a JavaScript (ES6/ES2015) collections library including **Stack**, **Queue**, and **PriorityQueue** data structures.

## Examples
```js
import {Stack, Queue, PriorityQueue} from 'nocake';
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
```

## Installation

```
npm install --save nocake
```

## Usage
You can import one or multiple collections from `nocake`:

```js
import {Stack, Queue, PriorityQueue} from 'nocake';
```
