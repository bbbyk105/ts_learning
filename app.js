function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result' + num);
}
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
printResult(add(5, 12));
