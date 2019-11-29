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
    if (typeof string !== 'string' || string.length === 0) return '';
    return capitalize(string.replace(/_/g, ' ').replace(/[^a-zA-Z0-9 ]/g, ' ')).split(' ').map(function(word, index) {
        return word;
    }).join(' ');
}

function snake_case(string) {
    if (typeof string !== 'string' || string.length === 0) return '';
    // return string.replace(/[A-Z\s+]/g, function(newString) {
    //     return '_' + newString.toLowerCase()
    // }).replace(/^_/, ''); //chaîne commençant par _

    return string.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

function leet(string) {
    if (typeof string !== 'string' || string.length === 0) return '';

    return string.replace(/[aeiouy]/ig, function(char) {
        switch(char) {
            case 'A':
            case 'a':
                return '4';
            case 'E':
            case 'e':
                return '3';
            case 'I':
            case 'I':
                return '1';
            case 'O':
            case 'o':
                return '0';
            case 'U':
            case 'u':
                return '_';
            case 'Y':
            case 'y':
                return '7';
        }
    })
}

function prop_access(object, path) {
    const attr = path.split('.').reduce((object ,i) => object[i], object);
    if (path === '' || path === null) return object;
    if (attr === undefined) return `${path} not exist`;
    return attr;
}

function verlan(string) {
    if (typeof string !== 'string' || string.length === 0) return '';

    // let verlantedString = '';
    // for (let i = string.length - 1; i >= 0; i--) {
    //     verlantedString += string[i];
    // }
    // return verlantedString;

    return string.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

function yoda(string) {
    if (typeof string !== 'string' || string.length === 0) return '';

    // let reverseString = [];
    // const array = string.split(' ');
    // for (let i = array.length - 1; i >= 0; i--) {
    //     reverseString.push(array[i]);
    // }
    // return reverseString;

    return string.split(' ').reverse().joing(' ');
}

function vig(str, code) {
    while(code.length < str.length) {
        code += code // fill code
    }

    return str.split('').map(function(char, index) {
        char = char.toLowerCase();
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0); // charCode ascii et soustrait code ascii de A pour avoir la position de l'alphabet
        if (charCode < 0 || charCode > 25) return char;
        const codeCode = code[index].charCodeAt(0) - 'a'.charCodeAt(0); // char codé 
        const encodedCode = charCode + codeCode % 26;

        return String.fromCharCode(encodedCode + 'a'.charCodeAt(0)); 
    }).join('');
}

const prairie = {
    animal: {
        type: {
            name: 'akita'
        }
    }
}
