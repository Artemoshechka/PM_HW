const flatWhite = function (array){
    return [].concat(...array)
}

let first_test = ["doppio", ["hot"], "milk"],
    second_test = [["espresso", "hot"], "milk"];

console.log(flatWhite(first_test));
console.log(flatWhite(second_test));