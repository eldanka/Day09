function functionElse(num) {
    if (num <= 5) {
        result = "5 or smaller";
        return result;
    } else {
        result = "Bigger than 5";
        return result;
    }
}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);

module.exports = functionElse;