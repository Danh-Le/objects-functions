// // 01 - Object
// const cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
// }
// // console.log(cat)
// // console.log(Object.values(cat.age))
// // if (cat.isCute) {
// //     console.log("So cute !")
// // }


// // 02 - Combine
// const cat2 = {
//     name: "Minou",
//     age: 8,
//     isCute: false,
// }
// let cats = [cat, cat2]
// // console.log(cats[0].age)
// // console.log(Object.values(cat.age))
// console.log(cats[1].isCute)

// // 03 - Even
// const checkIfEven = (num) => {
//         // console.log("num")
//     if (num % 2 ===0 ) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }
// checkIfEven(3)
// checkIfEven(46)

// // 04 - Compare
// const compare = (x, y) => {
//     if (x>y) {
//         console.log("x is bigger")
//     } else if (y>x) {
//         console.log("y is bigger")
//     } else {
//         console.log("both are the same")
//     }
// }
// compare(23, 45)
// compare(677, 98)
// compare(254, 254)

// // 05 - Add Up
// const addUp = (num) => {
//     let numbers = 0
//     for (let i = 0; i <= num; i++) {
//         numbers = numbers + i
//     }
//     console.log(numbers)
// }
// addUp(12)

// // 06 - Time
// const format = (num) => {
//     let secondes = (num)
//     let minutes = (Math.floor(num/60))
//     let heures = (Math.floor(minutes/60))


// }

// // 07 - Password generation
// let code = ""
// const generatePassword = (num) => {
//     for (let i = 0; i < num; i++) {
//         const numbers = Math.floor(Math.random()*26)+65  
//         code = code + String.fromCharCode(numbers)
//     }
//     if (num < 6 || num > 15) {
//         console.log("error")
//     } else {
//         console.log(code)
//     }
// }
// generatePassword(10)
// generatePassword(5)

// // 08 - Let's play
// const lauchDice = (numberOfDice) => {
//     let total = 0
//     for (let i=0; i<numberOfDice; i++) {
//         let min = 1
//         let max = 6
//         let random = Math.floor(Math.random()*max)+min
//         total = total + random
//     }
//     return total
// }
// const player1 = lauchDice(1)
// const player2 = lauchDice(1)
// // console.log(player1, player2)
// if (player1<player2) {
//     console.log(player1, player2, "Player 2 wins")
// } else if (player1>player2) {
//     console.log(player1, player2, "Player 1 wins")
// } else {
//     console.log(player1, player2, "Equality")
// }