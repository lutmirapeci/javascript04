const queue = [];

const enqueue = (Element) => {
  queue.push(Element);
};

const dequeue = () => {
  if (queue.length === 0) {
    return "No elements in the queuee!";
  }
  return queue.shift();
};

enqueue("a");
enqueue("b");
enqueue("c");

document.getElementById("queue").textContent = `Queue: ${queue}`;

dequeue();

document.getElementById("dequeue").textContent = `New Queue: ${queue}`;
