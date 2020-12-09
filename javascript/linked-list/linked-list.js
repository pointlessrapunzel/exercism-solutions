class Node {
  constructor(val, next, prev) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

export class LinkedList {
  #head
  #tail

  constructor() {
    // Initializing head with an empty value and next
    this.#head = null
    this.#tail = null
  }

  push(val) {
    // appending newNode to end, its prev points to current tail
    const newNode = new Node(val, null, this.#tail)
    if (!this.#head) {
      // this LL is empty, so the pushed node is also its head
      this.#head = newNode
    } else {
      this.#tail.next = newNode
    }

    this.#tail = newNode
  }

  pop() {
    const removedVal = this.#tail.val
    if (this.#tail === this.#head) {
      this.#head = null
    }
    this.#tail = this.#tail.prev
    return removedVal
  }

  shift() {
    const shifted = this.#head.val
    if (this.#head === this.#tail) {
      this.#tail = null
    }
    this.#head = this.#head.next
    return shifted
  }

  unshift(val) {
    const newNode = new Node(val, this.#head, null)
    if (!this.#tail) {
      this.#tail = newNode
    } else {
      this.#head.prev = newNode
    }

    this.#head = newNode
  }

  delete(val) {
    let trav = this.#head
    while (trav) {
      if (trav.val === val) {
        if (trav.prev) trav.prev.next = trav.next
        else this.#head = trav.next

        if (trav.next) trav.next.prev = trav.prev
        else this.#tail = trav.prev

        return
      }

      trav = trav.next
    }
  }

  count() {
    let count = 0
    let trav = this.#head
    while (trav) {
      count++
      trav = trav.next
    }
    return count
  }
}
