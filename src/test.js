const array = [{
    name: 'name 1',
    boolian: true
}, {
    name: 'name 2',
    boolian: false
}, {
    name: 'name 3',
    boolian: true
}, {
    name: 'name 4',
    boolian: false
}, {
    name: 'name 5',
    boolian: true
}];

const func = array.filter((item) => item.boolian === true).map((item) => item.name);


console.log(func);