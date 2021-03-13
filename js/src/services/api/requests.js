export const request = (url) => {
    try {
        return fetch(url)
            .then(response => {
                return response.json()
            })
    } catch (err) {
        throw err
    }
}