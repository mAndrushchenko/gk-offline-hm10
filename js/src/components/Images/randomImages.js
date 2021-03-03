export const randomImages = (data) => {
    if (!data) return
    let arrOfNumbers = []
    let arrOfImages = []

    for (let i = 0; i < 9; i++) {
        const randomNum = Math.floor(Math.random() * data.length)
        if (!arrOfNumbers.some(el => el === randomNum)) {
            arrOfNumbers.push(randomNum)
            arrOfImages.push(data[randomNum])
        } else {
            i--
        }
    }
    return arrOfImages
}