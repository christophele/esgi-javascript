function ucfirst(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string[0].toUpperCase() + string.substring(1);
}

function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string.toLowerCase().split(' ').map(function(item) {
        return ucfirst(item)
    }).join(' ');
}

function camelCase(string) {
    return capitalize(string).replace(/_/, '').replace(/\s+/g, '');
}

function snake_case(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string.replace(/[A-Z]/g, function(newString) {
        return '_' + newString.toLowerCase()
    }).replace(/^_/, ''); //chaîne commençant par _
}

function leet(string) {
    let cryptedString = '';
    for (let item of string) {
        if (item === 'a') {
            item = '4';
            cryptedString += item;
        } else if (item === 'e') {
            item = '3';
            cryptedString += item;
        } else if (item === 'i') {
            item = '1';
            cryptedString += item;
        } else if (item === 'o') {
            item = '0';
            cryptedString += item;
        } else if (item === 'u') {
            item = '_';
            cryptedString += item;
        } else if (item === 'y') {
            item = '7';
            cryptedString += item;
        } else {
            cryptedString += item;
        }
    }
    return cryptedString;
}

function prop_access(object, path) {
    const attr = path.split('.').reduce((object ,i) => object[i], object);
    if (path === '' || path === null) return object;
    if (attr === undefined) return `${path} not exist`;
    return attr;
}

function verlan(string) {
    let verlantedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        verlantedString += string[i];
    }
    return verlantedString;
}

function yoda(string) {
    let reverseString = [];
    const array = string.split(' ');
    for (let i = array.length - 1; i >= 0; i--) {
        reverseString.push(array[i]);
    }
    return reverseString;
}



console.log(camelCase('ToggleCase is_the coolest'));

const prairie = {
    animal: {
        type: {
            name: 'akita'
        }
    }
}
console.log(prop_access(prairie, 'animal.type.name.sexe'));