//input harus integer(number)
// 0 merupakan pemisah antar bilangan
// bilangan di sort dan dipisah berdasarkan bilangan itu sendiri
//putput harus integer

const divideSort = number => {
    if(typeof number !== 'number'){
        console.log('Inputan harus Number')
    } else {
        const x = number.toString().split('0')
        let hasil = x.map( i => i.split('').sort().join(''))
        let result = parseInt(hasil.join(''))
        console.log(result)
    }
}

divideSort('595656015946056')
