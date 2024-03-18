
export const getGalaxiesJSON = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';
    try {
        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
