export const debounce = (func, delay) => {
    let timerID;

    return (...args) => {
        clearTimeout(timerID);
        timerID = setTimeout(func, delay, ...args);
    }
}
