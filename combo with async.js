console.log("Start of our code")

const getData = () => {
    let evaluation = Math.floor(Math.random() * 10) % 2
    console.log("eval: ", evaluation)
    return evalResult = evaluation === 0? true : false
}

const prepareBiryani = () => {
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                getData() ? resolve("Ready") : reject("Rice out of stock")
            }, 3000);
        }
    )
    return promise
}

const prepareKheer = (data) => {
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                data !== 2? resolve("Ready") : reject("Sugar out of stock")
            }, 3000);
        }
    )
    return promise
}

async function startPreparing(data) {
    try {
        let biryani = await prepareBiryani()
        console.log("Biryani: ", biryani)

        let kheer = await prepareKheer(data)
        console.log("Kheer: ", kheer)
    }
    catch(error) {
        console.log("Failed Attempt: ", error)
    }
}

startPreparing(1)

console.log("End")