class MovingAverage {
    constructor(size) {
        this.size = size;
        this.window = new Queue();
        this.sum = 0.0;
    }

    next(val) {
        if (this.window.getSize() === this.size) {
            this.sum -= this.window.dequeue();
        }

        this.window.enqueue(val);
        this.sum += val;
        return this.sum / this.window.getSize();
    }
}



const movingAvg = new MovingAverage(3);
console.log(movingAvg.next(1));     // returns 1.0 (like a single heart rate reading)
console.log(movingAvg.next(10));    // returns 5.5 (the average after a short burst of activity)
console.log(movingAvg.next(3));     // returns 4.66667 (normalizing after the burst)
console.log(movingAvg.next(5));     // returns 6.0 (the most recent average, taking into account the last three readings)