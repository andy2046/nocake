const PriorityQueue = (function () {

  class QueueElement {
    constructor (element) {
      this.element = element
    }
  }

  const items = new WeakMap()
  const comp = Symbol('compareFunction')
  const defaultCompareFunc = (a, b) => {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  }

  class PriorityQueue {

    constructor (...args) {
      items.set(this, [])
      let [compareFunction, iterable] = args

      if (args.length >= 2 && typeof compareFunction !== 'function') {
        throw new Error('no compareFunction defined, PriorityQueue(compareFunction, iterable)')
      }

      if (args.length == 1 && typeof args[0] !== 'function') {
        iterable = args[0]
        compareFunction = defaultCompareFunc
      }

      if (args.length == 0) {
        compareFunction = defaultCompareFunc
      }

      this[comp] = compareFunction
      if (iterable) {
        for (const item of iterable) {
          this.enqueue(item)
        }
      }
    }

    enqueue (element) {
      if (element == null) {
        throw new Error('element is required, enqueue(element)')
      }

      let queueElement = element // new QueueElement(element)
      let q = items.get(this)
      let added = false

      for (let i=0; i<q.length; i++) {
        if (this[comp](queueElement, q[i]) < 0) {
          q.splice(i,0,queueElement)
          added = true
          break
        }
      }
      if (!added) {
        q.push(queueElement)
      }
      items.set(this, q)
    }

    dequeue () {
      let q = items.get(this)
      const r = q.shift()
      items.set(this, q)
      return r
    }

    front () {
      const q = items.get(this)
      return q[0]
    }

    has (element) {
      const q = items.get(this)
      for (const item of q) {
        if (element === item) {
          return true
        }
      }
      return false
    }

    isEmpty () {
      return items.get(this).length == 0
    }

    forEach (callback, thisArg) {
      for (const item of this) {
        callback.call(thisArg, item, this)
      }
    }

    *[Symbol.iterator]() {
      const q = items.get(this)
      for (let i = 0; i < q.length; i++) {
        yield q[i]
      }
    }

    size () {
      const q = items.get(this)
      return q.length
    }

    clear () {
      items.set(this, [])
    }

    print () {
      const q = items.get(this)
      for (let i=0; i<q.length; i++) {
        console.log(`${JSON.stringify(q[i])}`)
      }
    }

    toString () {
      return items.get(this).toString()
    }
  }
  return PriorityQueue
})()

export default PriorityQueue
