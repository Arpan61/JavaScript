//Higher-order functions  takes functions as argument, can return a function
//Callbacks are the higher-order functions


const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue : isFalse;
}

ifElse(true,
    () => { console.log(true); },
    () => { console.log(false); }
)


const square = n => { return n * n; };
const dothemath = (n, func) => { return func(n); };