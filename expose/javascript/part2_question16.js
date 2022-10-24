let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const property in statistics) {
    if (property.charAt(0) === 'r') {
        console.log(statistics[property]);
    } else if (Math.floor(statistics[property]/2) !== statistics[property]/2) {
        console.log(statistics[property]);
    }
}