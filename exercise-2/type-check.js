// null > object = false
// tableau > array = true


function type_check_v1(val, type) {
    if (typeof type !== 'string') return false;
    if (typeof type === 'array') {
        return Array.isArray(val);
    } else if (val === null && type === 'object') {
        return false;
    } else if (type === 'null') {
        return val === null;
    }

    return typeof val === type;
}

console.log(type_check_v1(1, 'number'));
console.log(type_check_v1(undefined, 'undefined'));
console.log(type_check_v1('string', 'string'));
console.log(type_check_v1(type_check_v1, 'function'));
console.log(type_check_v1(null, 'object'));