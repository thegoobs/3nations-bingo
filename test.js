const numberSet = new Set();
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min).toString();


while(numberSet.size < 15) {
    numberSet.add(getRandomNumber(1, 15));
}

console.log(numberSet);