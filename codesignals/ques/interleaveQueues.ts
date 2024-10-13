function interleaveQueues(queue1: number[], queue2: number[]): number[] {
    const interleavedQueue: number[] = [];

    // Mientras ambas colas tengan elementos
    while (queue1.length > 0 && queue2.length > 0) {
        // Extraer un elemento de cada cola
        interleavedQueue.push(queue1.shift()!);
        interleavedQueue.push(queue2.shift()!);
    }

    // Si queda algún elemento en queue1, añadirlos al final
    while (queue1.length > 0) {
        interleavedQueue.push(queue1.shift()!);
    }

    // Si queda algún elemento en queue2, añadirlos al final
    while (queue2.length > 0) {
        interleavedQueue.push(queue2.shift()!);
    }

    return interleavedQueue;
}

// Ejemplo de uso
const queue1 = [1, 2, 3];
const queue2 = [4, 5, 6, 7, 8];
console.log(interleaveQueues(queue1, queue2));  // Salida esperada: [1, 4, 2, 5, 3, 6, 7, 8]


function interweaveQueues(queue1, queue2) {
    let resultQueue = new Queue();
    
    // Continuously loop until both queues are empty.
    while (!queue1.isEmpty() || !queue2.isEmpty()) {
      // Take turns removing elements from each queue and enqueuing them into the resultQueue.
      if (!queue1.isEmpty()) {
        resultQueue.enqueue(queue1.dequeue());
      }
      if (!queue2.isEmpty()) {
        resultQueue.enqueue(queue2.dequeue());
      }
    }
    return resultQueue;
  }