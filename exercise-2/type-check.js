// null > object = false
// tableau > array = true


function type_check_v1(v, type) {
    if (typeof v === type) {
        return true;
    } else {
        return false;
    }
}
