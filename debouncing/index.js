// Debouncing
let count = 0;
const getData = () => {
    // calls an API and get data
    console.log("Fetching data...", count++)
}

const debounceMethod = function (fn, delay) {
    let timer;
    return function () {
        let context = this, args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const betterFunction = debounceMethod(getData, 3000);

