// You should implement your task here.

module.exports = function towelSort( matrix ) {
    let resArr = [];
    if(!matrix){
        return []
    }
    matrix.forEach( arr => {
        if ( matrix.indexOf( arr ) % 2 !== 0 ) {
            arr.reverse().forEach( el => {
                resArr.push( el )
            } )
        } else {
            arr.forEach( el => {
                resArr.push( el )
            } )
        }

    } )
    return resArr

}

// const funky = (matrix) => {
//     let resArr = [];
//     matrix.forEach( arr => {
//         if ( matrix.indexOf( arr ) % 2 !== 0 ) {
//             arr.reverse().forEach( el => {
//                 resArr.push( el )
//             } )
//         } else {
//             arr.forEach( el => {
//                 resArr.push( el )
//             } )
//         }
//
//     } )
//     return resArr
//
// }

// console.log('funky', funky([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], ]))
