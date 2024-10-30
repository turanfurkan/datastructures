// const myStack = [];
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.push('c');
// myStack.push('d');
// console.log(myStack);

// class StackNode
// {
//     constructor(val)
//     {
//         this.val = val;
//         this.next  = null;
//     }
// }

// class Stack {
//     constructor()
//     {
//         this.top = null;
//         this.size = 0;
//     }

//     push(val)
//     {
//         if(this.size === 0)
//         {
//             this.top = new StackNode(val);
//         }
//         else
//         {
//             const pushedNode = new StackNode(val);
//             pushedNode.next = this.top;
//             this.top = pushedNode;
//         }

//         this.size++;
//     }

//     pop() {
//         if (this.size === 0) return null;
//         const poppedNode = this.top;
//         this.top = this.top.next;
//         this.size--;

//         return poppedNode.val;
//     }

//     getTop() {
//         return this.top.val;
//     }

// }

// const myStack = new Stack();
// console.log(myStack);
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack.pop());
// console.log(myStack.size);
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

// console.log(myStack.size);

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new StackNode(val);

    if (this.size === 0) {
      this.top = newNode;
    }
    else
    {
        newNode.next = this.top;
        this.top = newNode;
    }

    this.size++;
  }

  pop()
  {
    if(this.size === 0) return null;

    const poppedNode = this.top;

    this.top = this.top.next;
    this.size--;

    return poppedNode.val;
  }

  getTop()
  {
    if(this.size === 0) return null;

    return this.top.val;
  }
}

const firstNode = new StackNode("Bir");
// console.log(firstNode.val);

const secondNode = new Stack();
secondNode.push("Bir");
secondNode.push("İki");
secondNode.push("Üç");
secondNode.push("Dört");
secondNode.pop();
secondNode.pop();
// secondNode.pop();
// secondNode.pop();

console.log(secondNode.getTop());

