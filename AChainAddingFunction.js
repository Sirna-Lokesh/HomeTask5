function add(x) {
    // console.log(x);
    return function(y) {
        return x + y;
    };
}