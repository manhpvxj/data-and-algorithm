class Stack {
  stack: Array<number> = [];
  capacity: number = 0;
  top: number = -1;

  // create a new stack
  createStack(size: number) {
    this.stack = new Array<number>(size);
    this.capacity = size;
  }

  // check if the stack is empty
  isEmpty(): boolean {
    return this.top === -1;
  }

  // check if stack is full
  isFull(): boolean {
    if (this.top === this.capacity - 1) return true;

    return false;
  }

  // push an element into the stack
  push(value: number) {
    if (this.isFull()) throw new Error("Stack already full");
    this.top++;
    this.stack[this.top] = value;
  }

  // get the last element of stack and remove it from the stack
  pop(): number {
    if (this.isEmpty()) throw new Error("Stack is empty");
    this.top--;
    this.capacity--;
    return this.stack[this.top];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }

    console.log("Current stack: [");
    for (let i = 0; i < this.capacity; i++) {
      if (i === this.capacity - 1) console.log(this.stack[i], "]");
      else console.log(this.stack[i], ",");
    }
  }
}

function mainStack() {
  const stack = new Stack();
  stack.createStack(5);

  stack.push(1);
  stack.push(4);
  stack.push(2);
  stack.push(3);
  stack.push(7);

  stack.print();

  stack.pop();
  stack.pop();
  stack.pop();

  stack.print();
}

mainStack();
