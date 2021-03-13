export const request = (url: string) => {
    try {
        return fetch(url)
            .then((response: Response) => {
                return response.json()
            })
    } catch (err) {
        throw err
    }
}