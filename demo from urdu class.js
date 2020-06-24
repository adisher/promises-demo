// const getData = () => {
//     let evaluation = Math.floor(Math.random() * 10) % 2
//     console.log("eval: ", evaluation)
//     return evalResult = evaluation === 0? true : false
// }
// console.log("getdata(): ", getData())

const resolveFunction = () =>  console.log("success")
const rejectFunction = () =>  console.log("failure")

let result = new Promise( 
        (resolve, reject) => {
            setTimeout(// () => (getData()? resolve() : reject()) 
                () => {
                    let evaluation = Math.floor(Math.random() * 10) % 2
                    console.log("eval: ", evaluation)
                    evalResult = evaluation === 0? resolve() : reject()
                }, 
            3000)
        }
    );

result.then(resolveFunction).catch(rejectFunction);
console.log("Code other than getdata")