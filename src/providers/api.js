import axios from 'axios';

export const pokeApi = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' });

export const getPokemon = async pokemonName => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getEvolutionChain = async especieUrl => {
  try {
    const response = await axios.get(especieUrl);
    const evolutionChainUrl = response.data.evolution_chain.url
    const evolutionResponse = await axios.get(evolutionChainUrl);
    return evolutionResponse;
  } catch (error) {
    return error;
  }
};
