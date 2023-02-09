import axios from 'axios';

export const getPokemon = async pokemonName => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getEvolutionChain = async pokemonId => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`);
    return response.data.chain.species;
  } catch (error) {
    return error;
  }
};
