function add(x) {
    return function(y) {
        if(y)
            return add(x + y);
        else
            return x;
    };
}