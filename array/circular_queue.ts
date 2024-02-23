class CircularQueue {
  queue: Array<number>;
  top: number;
  current: number;
  size: number;

  constructor() {
    this.queue = [];
    this.current = -1;
    this.top = -1;
    this.size = -1;
  }
  // check if queue is empty
  isEmpty(): boolean {
    return this.top === -1;
  }

  // check if queue is full
  isFull(): boolean {
    return (
      (this.top === 0 && this.size === this.current + 1) ||
      this.top === this.current + 1
    );
  }

  // create a new queue
  createQueue(size: number) {
    this.queue = new Array<number>(size);
    this.size = size;
  }

  // push an element into the queue
  enqueue(value: number) {
    if (this.isFull()) throw Error("Queue is full");
    if (this.isEmpty()) this.top = 0;
    this.current = (this.current + 1) % this.size;
    this.queue[this.current] = value;
  }

  // get the element from the queue
  dequeue(): number {
    if (this.isEmpty()) throw Error("Queue is empty");

    let element = this.queue[this.top];

    // if queue has only one element, reset the queue
    if (this.top === this.current) {
      this.top = -1;
      this.current = -1;
    } else {
      this.top = (this.top + 1) % this.size;
    }
    console.log("dequeued element: " + element);
    return element;
  }

  print() {
    console.log("current:");
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    if (this.current >= this.top) {
      for (let i = this.top; i <= this.current; i++) {
        console.log(this.queue[i]);
      }
    } else {
      for (let i = this.top; i < this.size; i++) {
        console.log(this.queue[i]);
      }
      for (let i = 0; i <= this.current; i++) {
        console.log(this.queue[i]);
      }
    }
  }
}

function mainCircularQueue() {
  const queue = new CircularQueue();
  queue.createQueue(5);

  queue.enqueue(1);
  queue.enqueue(4);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(7);

  queue.print();

  queue.dequeue();
  queue.enqueue(4);
  queue.dequeue();
  queue.enqueue(8);

  //   queue.enqueue(0);

  queue.print();
}

mainCircularQueue();
