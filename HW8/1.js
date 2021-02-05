const multiplyBy = function(multiplier, ...args){
    if (args.length === 0){
        return console.log('No arguments were given')
    }else{
        let new_array = [];
        for(let char of args){
            let new_element = char * multiplier;
            new_array.push(new_element);
        }
        return console.log(new_array)
    }
}

let a = 5;

multiplyBy(a, 2, 3, 4, 5);
multiplyBy(a);