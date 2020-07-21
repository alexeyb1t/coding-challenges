class Queue<T> {
  private stack1: T[] = [];
  private stack2: T[] = [];

  append(item: T) {
    this.stack1.push(item);
  }

  dequeue(): T {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        throw new Error('The stack is empty');
      }

      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  dequeue2(): T {
    const stack1 = [...this.stack1];
    this.stack1.shift();
    this.stack2 = stack1.reverse();
    return this.stack2.pop();
  }
}

const queue = new Queue<number>();
queue.append(4);
queue.append(5);
queue.append(6);
queue.append(7);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.append(8);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
