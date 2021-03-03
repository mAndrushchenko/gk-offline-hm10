export const request = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json()
        })
}