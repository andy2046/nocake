import { Stack, Queue, PriorityQueue, PromiseQueue } from '../nocake'

export default async function nocakeHandler (ctx, next) {

  const newArr = Array.from(Array(10), (d, i) => Math.floor(i * Math.random()))
  const anotherArr = newArr.concat(Array(5).fill(5))

  if(ctx.path === '/stack') {
    let stack = new Stack(anotherArr)
    stack.push(5)
    stack.pop()
    stack.has(5)
    ctx.body = 'Array:' + anotherArr + '\nStack:' + stack.toString()
  } else if (ctx.path === '/queue') {
    let queue = new Queue(anotherArr)
    // queue.enqueue(5)
    // queue.dequeue()
    queue.has(5)
    ctx.body = 'Array:' + anotherArr + '\nQueue:' + queue.toString()
  } else if (ctx.path === '/priorityqueue') {
    let priorityqueue = new PriorityQueue(anotherArr)
    // priorityqueue.enqueue(5)
    // priorityqueue.dequeue()
    priorityqueue.has(5)
    ctx.body = 'Array:' + anotherArr + '\nPriorityQueue:' + priorityqueue.toString()
  } else if (ctx.path === '/promisequeue') {
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
    
    ctx.body = `
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
    `
  } else {
    await next()
  }
}
