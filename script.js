let discount = prompt('Какая скидка')
let total = Number 
let totalSale = Number 
let max = Object
let min = Object
let avarage = Number 
let total_sale = Number
let arr = [
    {
        name: 'milk',
        price: 3.12
    },
    {
        name: 'meat',
        price: 7.32
    },
    {
        name: 'potato',
        price: 2.2
    },
    {
        name: 'energetic',
        price: 4
    },
    {
        name: 'tomato',
        price: 2.52
    },
    {
        name: 'bread',
        price: 1.5
    },
]
const start = function () {
    total = 0
    for (let item of arr) {
        // The sum of price
        total += item.price
        // The avarage cost of all price
        avarage = Math.floor((total / arr.length) * 100) / 100
        // The maximum of prices 
        if (item.price > 3) {
            max = Object(item)
            // console.log(max);
        } else {
            // The minimum of them
            min = Object(item)
            // console.log(min);
        }
        totalSale = item.price - (item.price * discount / 100)
    }
    // console.log(totalSale);
}
start()