function truckTour(petrolpumps: number[][]): number | null {
    // Write your code here
    let rest: number[][] = [];

    let stateGas = 0;
    let stateStartingPoint: number | null = null;
    for (let i = 0; i < petrolpumps.length; i++) {
        let [gas, distance] = petrolpumps[i];

        // cargo nafta
        stateGas += gas;
        // si el viaje no se arranco , lo arranco desde esta parada
        if (stateStartingPoint === null) {
            stateStartingPoint = i;
        }

        // si no me alcanza el gas. significa que no era el iniciio correcto
        // reseteo mi estado y eligo una nueva estacion para arrancar
        if (stateGas < distance) {
            rest.push(petrolpumps[stateStartingPoint]);
            stateGas = 0;
            stateStartingPoint = null;
        }

        // avanzo a la siguiente parada
        stateGas -= distance;
    }

    return stateStartingPoint;
}

console.log(truckTour(([[1, 5], [10, 3], [3, 4]])))