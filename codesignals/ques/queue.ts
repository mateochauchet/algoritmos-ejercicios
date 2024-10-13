class Queue {
    constructor() {
        this.items = [];
    }

    // Insertar un elemento al final de la cola
    enqueue(element) {
        this.items.push(element);
    }

    // Eliminar el elemento del frente de la cola
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // shift() elimina el primer elemento
    }

    // Ver el elemento del frente de la cola sin eliminarlo
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0]; // Devuelve el primer elemento
    }

    // Verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Devolver el tamaño de la cola
    size() {
        return this.items.length;
    }

    // Vaciar la cola
    clear() {
        this.items = [];
    }
}