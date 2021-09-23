const URL = `https://api.sellbrite.com/v1`

const authToken = Buffer.from(process.env.REACT_APP_ACCOUNT_TOKEN +':'+process.env.REACT_APP_SECRET_KEY).toString('base64')
console.log(authToken, "authtoken")

export async function getProducts() {
    try {
        let response = await fetch(URL + '/products/', {
            headers: {
                'content-type': 'application/json',
                "Authorization": `Basic ${authToken}`
            }
        })
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

export async function getInventory() {
    try {
        let response = await fetch(URL + '/inventory/',{
            headers: {
                'content-type': 'application/json',
                "Authorization": `Basic ${authToken}`
            }
        })
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
