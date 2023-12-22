// ====================================================================
// Task 1
// ====================================================================

// function mySetTimeout(delay) {
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 res("true")
//             }else {
//                 rej("false")
//             }
//         }, delay)
//     })
// }

// mySetTimeout(2000)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// ====================================================================
// .then().catch() SYNTAX
// ====================================================================

// function makeToys (delay) {
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 res("Undefected")
//             }else {
//                 rej("Defected")
//             }
//         }, delay)
//     })
// }

// function deliverToys(status,delay) {
//     return new Promise ((res, rej) => {
//         if (status === 'Undefected') {
//             setTimeout(() => {
//                 if (Math.random() > 0.4) {
//                     res("The toy has been delivered")
//                 }else {
//                     rej("The toy is in the process of delivery")
//                 }
//             }, delay)
//         }
//     })
// }

// function sellToys (status, delay) {
//     return new Promise ((res, rej) => {
//         if (status === 'The toy has been delivered') {
//             setTimeout(() => {
//                 if (Math.random() > 0.7) {
//                     res("Toy has been sold")
//                 }else {
//                     rej("Toy was unsuccessful")
//                 }
//             }, delay)
//         }
//     })
// } 

// makeToys(3000)
//     .then(status => deliverToys(status, 2000))
//     .then(status => sellToys(status, 1000))
//     .then (res => console.log(res))
//     .catch(err => console.log(err))

// ====================================================================
// ASYNC/AWAIT SYNTAX
// ====================================================================

// async function makeToys(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve("Undefected");
//             } else {
//                 reject("Defected");
//             }
//         }, delay);
//     });
// }

// async function deliverToys(status, delay) {
//     return new Promise((resolve, reject) => {
//         if (status === 'Undefected') {
//             setTimeout(() => {
//                 if (Math.random() > 0.4) {
//                     resolve("The toy has been delivered");
//                 } else {
//                     reject("The toy is in the process of delivery");
//                 }
//             }, delay);
//         }
//     });
// }

// async function sellToys(status, delay) {
//     return new Promise((resolve, reject) => {
//         if (status === 'The toy has been delivered') {
//             setTimeout(() => {
//                 if (Math.random() > 0.7) {
//                     resolve("Toy has been sold");
//                 } else {
//                     reject("Toy was unsuccessful");
//                 }
//             }, delay);
//         }
//     });
// }

// async function result() {
//     try {
//         const makeToysResult = await makeToys(3000);
//         const deliverToysResult = await deliverToys(makeToysResult, 2000);
//         const sellToysResult = await sellToys(deliverToysResult, 1000);
//         console.log(sellToysResult);
//     } catch (error) {
//         console.log(error);
//     }
// }

// result();