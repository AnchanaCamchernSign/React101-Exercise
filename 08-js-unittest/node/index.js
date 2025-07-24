function add(a, b) {
    return a + b
}

function fizzBuzz(input) {

    if(input % 3 === 0 ) {
        return 'Fizz'
    } 

    return `${input}`
}

module.exports = {
    add,
    fizzBuzz
} 