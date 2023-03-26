const baseURL = 'http://localhost:9000/api/bakery/'

export const getBakeryItems = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBakeryItem = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteBakeryItem = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}