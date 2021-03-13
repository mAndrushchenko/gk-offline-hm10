import { TArrayImagesState } from "../store/store-types"

export const randomImages = (data: null | TArrayImagesState): TArrayImagesState => {
    if (!data) return []
    let arrOfNumbers: number[] = []
    let arrOfImages: any[] = []

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