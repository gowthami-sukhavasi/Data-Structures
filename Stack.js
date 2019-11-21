class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }

  pop() {
  if (this.stack.length == 0) 
        console.log("Underflow/No elements in stack"); 
    return this.stack.pop();
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }
  printStack() 
{ 
    var str = ""; 
    for (var i = 0; i < this.stack.length; i++) 
        str += this.stack[i] + " "; 
     console.log(str);
   
} 
isEmpty() 
{ 
    // return true if stack is empty 
    console.log(this.stack.length == 0); 
} 
}
var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
stack.pop();
stack.printStack();
stack.pop();
stack.peek();
stack.pop();
stack.isEmpty();
stack.pop();
