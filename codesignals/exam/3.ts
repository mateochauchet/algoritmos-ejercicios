export const solutions = (laps: string[][]): string[] => {
    let elimination: string[] = [];
    for (let i = 0; i < laps.length; i++) {
        const lap = laps[i];

        let lapWorstTime = 0;
        for (let racer of lap) {
            const [name, timeStr] = racer.split(" ");

            //if already eliminated , dont count for the race
            if (elimination.includes(name)) {
                continue;
            }

            const time = +timeStr;

            if (time > lapWorstTime) {
                lapWorstTime = time;
            }
        }

        let lapEliminations: string[] = [];

        for (let racer of lap) {
            const [name, timeStr] = racer.split(" ");
            const time = +timeStr;

            if (time === lapWorstTime) {
                lapEliminations.push(name)
            }
        }

        // if more eliminated on lap , sort them by name
        if (lapEliminations.length > 1) {
            lapEliminations.sort()
        }

        elimination.push(...lapEliminations)

    }

    return elimination;
}



export const laps = [
    [
        "Mario 153",
        "Luigi 160",
        "Hamillton 170",
        "APeach 170",
    ],
    [
        "Mario 158",
        "Luigi 140",
        "Hamillton 140",
        "APeach 190",
    ],
    [
        "Mario 134",
        "Luigi 180",
        "Hamillton 140",
        "APeach 136",
    ],
]


console.log(solutions(laps));
