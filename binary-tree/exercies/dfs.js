class Node {
    constructor(val)
    {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const depthFirstValues = (root) => {
    if(root === null) return [];
     const stack = [root];
     const result = [];

     while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
     }

     return result;
};

console.log(depthFirstValues(c));

const root = new Node("a");
console.log(depthFirstValues(root));


const rootRight = new Node("a");
rootRight.right = new Node("b");
rootRight.right.right = new Node("c");
rootRight.right.right.right = new Node("d");

console.log(depthFirstValues(rootRight));



