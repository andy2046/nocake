const Stack = (function () {

  const items = new WeakMap()
  
  class Stack {

    constructor (iterable) {
      items.set(this, [])
      if (iterable) {
        for (const item of iterable) {
          this.push(item)
        }
      }
    }

    push (element) {
      let s = items.get(this)
      s.push(element)
    }

    pop () {
      let s = items.get(this)
      const r = s.pop()
      return r
    }

    peek () {
      const s = items.get(this)
      return s[s.length-1]
    }

    has (element) {
      const s = items.get(this)
      for (const item of s) {
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
      const s = items.get(this)
      for (let i = s.length - 1; i >= 0; i--) {
        yield s[i]
      }
    }

    size () {
      const s = items.get(this)
      return s.length
    }

    clear () {
      items.set(this, [])
    }

    print () {
      console.log(this.toString())
    }

    toString () {
      return items.get(this).slice().reverse().toString()
    }
  }

  return Stack
})()

export default Stack
