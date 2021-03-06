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

function type_check_v2 (val, param) {
    if (param.hasOwnProperty('type') && param.hasOwnProperty('value') === false) {
        return type_check_v1(val, param.type);
    } else if ((param.hasOwnProperty('type') && typeof val === param.type
        && param.hasOwnProperty('value') && val === param.value)) {
        return true;
    } else if (param.enum && param.enum.includes(val)) {
        return true;
    }
    return false;
}