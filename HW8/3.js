const extendWith = function (first_obj, second_obg){
    return {...second_obg, ...first_obj}
}

let first_obg = {
    name: 'Artem',
    surname: 'Storozhuk',
    age: 20,
    phone: '0972510055',
    height: '180cm'
}
let second_obj = {
    name: 'Artem',
    surname: 'Storozhuk',
    age: 18,
    phone: '0677777777',
    weight: '69kg'
}

console.log(extendWith(first_obg, second_obj));