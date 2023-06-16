import { CARS } from "./data.mjs";

export const getSuggestions = async (keyword) => {
    const result = CARS.filter(
        i => i.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );
    return new Promise((resolve)=>{
        setTimeout(() => resolve(result), 1000)
    });
}

export const debounce = (fun, delay = 500) => {
    let timerCtx;
    return function() {
        const self = this;
        const args = arguments;
        clearTimeout(timerCtx);
        timerCtx = setTimeout(() => fun.apply(self, args), delay);
    };
};

