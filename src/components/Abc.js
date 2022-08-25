function Abc() {
    // let result = [];

    let array1 = [1,3,4,2,7,9,10,6,8];
    let array2 = [1,3,9,11,5,7,13];
    // let count = 0;
    // for (let i = 0; i < array1.length; ++i) {
    //     for (let j = 0; j < array2.length; ++j) {
    //         if (array1[i] == array2[j]) {
    //             result[count] = array1[i];
    //             ++count;
    //         }
    //     }
    // }
    // console.log(result)
    // const max = Math.max(...array2);
    // array2 = array2.filter(ele => ele !== max)

    // return Math.max(...array2)

    // var myArr = Array.from("223489", ele => {
    //     return ele
    // })
    // const myArr = array2.includes(2)

    // const myArr = array2.indexOf(3)
    //Trả về -1 nếu không tìm thấy phần tử trong mảng, 1 nếu tìm thấy

    // const myArr = Array.isArray(array2)
    //Kiểm tra array2 có phải là mảng hay không

    // const myArr = array2.join()
    //biến array2 thành một chuỗi string

    // if(!Array.prototype.first)
    // console.log(myArr)

    // const styles = ["Jazz", "Blues", "Rock-n-Roll"]
    // if(styles.length % 2 !== 0 ) {
    //     styles.splice((styles.length)/2 - 0.5, 0, "Classics" )
    // }else {
    //     styles.splice((styles.length)/2, 0, "Classics" )
    // }
    // const array = Array.from("124532", ele => {
    //     return ele
    // })
    // const max = Math.max(...array1);
    // array1 = array1.filter(ele => ele !== max)
    // return Math.max(...array1)
    let result=[];
    let count = 0;
    for(let i in array1) {
        for(let j in array2) {
            if (array1[i] === array2[j]){
                result[count] = array1[i];
                ++ count
            }
        }
    }
    console.log(result)
    //Gia tri lon thu 2 trong mang
    // let result = nums.sort().filter((ele, index, array) => index === array.indexOf(ele))
    // return result[result.length - 2]
}

export default Abc
// let result = (array1, array2)
// console.log(result);

// function Abc () {
// return new Promise(resolve => {
//     setTimeout(() => {
//         resolve('resolved')
//     },2000)
// })
// }
// async function asyncCall() {
//     console.log('calling')
//     var result = await Abc();
//     console.log(result)
// }
// asyncCall()
// console.log('has called')

// function Abc (...params) {
//     return params
// }
// let a = Abc(1,23,4)
// console.log(a)

// function Abc () {
    // const a = [1,2,3]
    // const ex = [4,5,6]
    // const newA = [...a, ...ex]
    // console.log(newA)
    // return <div></div>

    // const {foo, bar} = { foo: 'FOO', bar: 'BAR' }; console.log(foo, bar);

    // let arr = [1,2,3,4]; let plusOne = arr.map(n => n + 1); console.log(arr); console.log(plusOne);
// }

// export default Abc