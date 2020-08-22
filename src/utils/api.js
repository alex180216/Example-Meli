
const baseUrl='https://api.mercadolibre.com/sites/MLA/';

export async function getResultsByName(name){
    const response = await fetch(`${baseUrl}search?q=${name}`)
    const responseJson = await response.json()
    return responseJson


}

export default{
    getResultsByName
}