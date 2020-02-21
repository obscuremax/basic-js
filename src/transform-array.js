module.exports = function transform(arr) {
    throw 'Not implemented';

    // if (arr === Number(arr) || arr === null || arr === false || arr === undefined || arr.length === undefined) {
    //     throw "err"
    // } else if (arr[0] === undefined ){
    //     return []
    // } else {
    //     let newArr = []
    //
    //
    //     for (let i=0; i<arr.length; i++) {
    //         if (arr.length === 0){
    //             newArr=[+arr[0]]
    //         }
    //         if (arr[i] === "--discard-next") {
    //             if (arr[i+1] !== undefined) {
    //                 arr.splice(i+1,1, undefined)
    //                 // newArr.push(arr[i+1])
    //             } else {
    //                 break
    //             }
    //
    //         } else if (arr[i] === "--discard-prev" ) {
    //             if (newArr.pop() !== undefined) {
    //                 newArr.pop()
    //             } else {
    //                 break
    //             }
    //         } else if (arr[i] === "--double-next" && i !== 0) {
    //             if (arr[i+1] !== undefined) {
    //                 newArr.push( arr[i+1])
    //                 newArr.push( arr[i+1])
    //             } else {
    //                 break
    //             }
    //
    //         } else if (arr[i] === "--double-prev" ) {
    //             if (newArr.pop() !== undefined) {
    //                 let doble = newArr.pop()
    //                 newArr = [...newArr, doble, doble]
    //             } else {
    //                 break
    //             }
    //
    //         } else {
    //             newArr.push(arr[i])
    //         }
    //
    //
    //     }
    //     return newArr
    // }
};
