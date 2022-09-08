function cache(func) {
    let calls = {}
    return function () {
        let key = JSON.stringify(arguments);
        let isAlreadyComputed = calls.hasOwnProperty(key);
        if (isAlreadyComputed) {
            return calls[key];
        }
        else {
            calls[key] = func.apply(null, arguments);
            return calls[key];
        }
    }
}