function myForLoop1() {
    evenNumbers = "";
    for (var i = 0; i <= 8; i +=2) {
        if(i === 8) {
            evenNumbers += i;
        } else {
            evenNumbers += i + ",";
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    evenInverseNumbers = "";
    for (var i = 8; i >= 0; i -=2) {
        if(i === 0) {
            evenInverseNumbers += i;
        } else {
            evenInverseNumbers += i + ",";
        }
    }
    return evenInverseNumbers;
}

myForLoop1();
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};