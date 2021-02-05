const extendWithEndless = function (...objects){
    let new_object = {};
    for (let char of objects){
        let keys = Object.keys(char);
        for (let key of keys){
            new_object[key] = char[key];
        }
    }
    return new_object
}

console.log(extendWithEndless(

    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },

    { isValid: false, additionalProp: { thisIsGoodProp: 123 } },

    { prop3: true },

    { prop4: true },

    { isValid: [false, false] },

    {
        flatWhite: ['doppio', 'hot', 'milk'],

        isValid: [false, false],

        additionalProp: { thisIsGoodProp: 123 },

        prop3: true,

        prop4: true

    }
));