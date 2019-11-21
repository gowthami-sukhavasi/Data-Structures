class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }
  
isEmpty()
{    // return true if the queue is empty. 
   return this.queue.length == 0; 
}

 front()
  {
    // returns the Front element of the queue without removing it. 
    if(this.isEmpty()) 
        console.log("No elements in Queue"); 
        else
    console.log("Front element:",this.queue[0]); 
}

printQueue()
{ 
    var str = ""; 
    for(var i = 0; i < this.queue.length; i++) 
        str += this.queue[i] +" "; 
    console.log("Queue:",str); 
} 
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();
queue.front();
queue.dequeue();
queue.printQueue();
queue.dequeue();
queue.printQueue();
queue.dequeue();
console.log(queue.isEmpty());
queue.front();
