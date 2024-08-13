import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpointUrl) {
    try {
        const url = `${API_HOST}/pokemon?offset=0&limit=20`;
        const response = await fetch(url || endpointUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function loadMorePokemonsApi(endpointUrl) {
    try {
        console.log(endpointUrl)
        const response = await fetch(endpointUrl);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
    
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
    
}