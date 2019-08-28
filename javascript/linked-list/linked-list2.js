//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value
    this.previous = null
    this.next = null
  }
  // Representing a node. What the list is contained in
}

export class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.ds = []
    this.length = 0
  }
  // adding the head and tail make it a doubly linked list

  push(item) {
    //adding a new item to the back of the list 
    let node = new Node(item)
    if (this.ds.length == 0) {
      this.head = node
      this.tail = node
    }
    else {
      node.previous = this.tail
      // its previous is the pevious last element(that is the tail)
      this.tail.next = node
      // set the next of the tail
      this.tail = node
      // this is the tail node
    }
    this.ds.push(node)
    this.length++
    //increse the count of the list
  }

  pop() {
    //removes the last element of the list
    if (this.length > 0) {
      this.length--
      //decrease length
      let popped = this.tail.value

      if (this.head != this.tail) {
        // get the second to last element
        const previous = this.tail.previous
        //set its next to null
        previous.next = null
        //make that one the tail
        this.tail = previous
      }
      else {
        this.head = this.tail = null
      }
      return popped
    }
    else {
      throw new Error('list underflow')
    }
  }

  shift() {
    // remove from the beginning of list - removes from the front
    if (this.count() > 0) {
      let shifted = this.head.value;
      
      if (this.head != this.tail) {
        // if there is only on node in the linked list
        const next = this.head.next
        // new head is the second element( next of head)
        next.previous = null
        // if the head has no previous item
        this.head = next
        //this then becomes next 
      }
      else {
        this.head = this.tail = null
        //the head will not equal the tail (false)
      }
      this.length--
      // decrease the length when removing from the front
      return shifted
      //returning the new list
    }
    else {
      return 'list underflow'
    }

  }
  
  unshift(item) {
    // add to the  beginning of list - takes it to the left in front
    let newHead = new Node(item)
    // if list is empty
    if (this.count() === 0) {
      // first node has no previous and next
      this.head = newHead
      this.tail = newHead
    }
    else {
      newHead.next = this.head
      // new element is the head previous head is the second element 
      this.head = newHead
      this.head.next.previous = this.head
    }

    this.length++
    // increase the length of the list
  }
  
  delete(item) {
    // remove the element  with the given value
    let current = this.head
    while (current) {
      if (current.value == item) {
      // item is removed from the middle
        if (current != this.tail && current != this.head) {
          // setting the previous and next of current item
          current.previous.next = current.next
          current.next.previous = current.previous
        }
        // if it is the only element
        else if (current == this.head && current == this.tail) {
          this.head = this.tail = null
        // if item is removed from head the second element is the new head
        } else if (current == this.head) {
          this.head.next.previous = null
          this.head = this.head.next
        }
        // item is removed from the tail the second to last element is the new tail
        else {
          this.tail.previous.next = null
          this.tail = this.tail.previous
        }
       
        this.length--
        //decrease the length and end the loop

        break
      }
      current = current.next
    }
  }
  count() {
    return this.length
  }
}