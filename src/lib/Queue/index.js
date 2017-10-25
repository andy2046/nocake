const Queue = (function () {

  const items = new WeakMap()

  class Queue {

    constructor (iterable) {
      items.set(this, [])
      if (iterable) {
        for (const item of iterable) {
          this.enqueue(item)
        }
      }
    }

    enqueue (element) {
      let q = items.get(this)
      q.push(element)
    }

    dequeue () {
      let q = items.get(this)
      const r = q.shift()
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
      console.log(this.toString())
    }

    toString () {
      return items.get(this).toString()
    }
  }
  return Queue
})()

export default Queue
