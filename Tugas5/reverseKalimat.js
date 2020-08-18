//reverseWord
const reverseKalimat = text => {
    let x = text.split(" ").reverse().join(' ')
    console.log(x)
}
reverseKalimat('Saya Belajar Tidur')