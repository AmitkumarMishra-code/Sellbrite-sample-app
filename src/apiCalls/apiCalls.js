const URL = `https://email-marketing-app.herokuapp.com`

export async function getProducts() {
    try {
        let response = await fetch(URL + '/products')
        let data = await response.json()
        console.log(data)
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return data.message
        }
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export async function getInventory() {
    try {
        let response = await fetch(URL + '/inventory')
        let data = await response.json()
        if (response.status !== 200) {
            throw new Error(data.message)
        } else {
            return data.message
        }
    } catch (error) {
        throw error
    }
}
