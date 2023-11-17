const getFAQ = async () => {
    let response = await fetch(" http://localhost:3000/FAQ");
    let data = await response.json()
    return data
}

export default getFAQ;