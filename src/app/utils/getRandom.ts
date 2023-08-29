function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const getRandom = (start: number, end: number) => { 
    return getRandomInt(end - start) + start;
}