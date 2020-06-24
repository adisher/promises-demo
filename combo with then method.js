console.log("before code")

const getData = () => {
    let evaluation = Math.floor(Math.random() * 10) % 2
    console.log("eval: ", evaluation)
    return evalResult = evaluation === 0? true : false
}

const pastaResolveFunc = (value) => {
    console.log("Pasta: ", value)
    return prepareCake()
}

const cakeResolveFunc = (value) => {
    console.log("Cake: ", value)
}

const rejectFunc = (value) => console.log("Failed Attempt: ", value)


const preparePasta = () => {
    let result = new Promise(
        (resolve, reject) => {
            setTimeout( () => getData() ? resolve("Ready") : reject("pasta out of stock"), 3000)
        }
    )
    return result
}

const prepareCake = () => {
    let result = new Promise(
        (resolve, reject) => {
            setTimeout( () => getData() ? resolve("Ready") : reject("cream out of stock"), 5000)
        }
    )
    return result  
}

let result = preparePasta()

result.then(pastaResolveFunc)
.then(cakeResolveFunc)
.catch(rejectFunc)

console.log("after code")