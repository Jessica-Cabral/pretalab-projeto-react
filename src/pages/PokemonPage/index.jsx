import { useEffect, useState } from "react";
import Axios from "axios";
import "./styles.css";
import BarraProgresso from "../../componentes/BarraProgresso";
import { Box } from "@mui/system";

const PokemonPage = () => {
  const [pokemonsReferences, setPokemonsReferences] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [progresso, setProgresso] = useState (10);

  const fetchAllPokemons = async () => {
    try {
      const response = await Axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=380"
      );
      setPokemonsReferences(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos Pokemons:", error);
    }
  };

  const getPokemonsList = async () => {
    let tempList = [];

    for (const pokemon of pokemonsReferences) {
      try {
        const response = await Axios.get(pokemon.url);
        tempList.push(response.data);
      } catch (error) {
        console.error("Erro ao buscar o Pokemon:", error);
      }
    }

    setPokemonList(tempList);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    getPokemonsList();
  }, [pokemonsReferences]);

  console.log(pokemonList);

  useEffect(()=>{
    const timer = setInterval(() =>{
      setProgresso((prevProgress) => (prevProgress >=100 ? 10 :prevProgress + 10));
    },800);
    return () =>{
      clearInterval (timer);
    };
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon, index) => (
        <a
          key={pokemon.id}
          className="pokemon-item"
          href={pokemon.forms[0].url}
        >
          <img src={pokemon.sprites.front_default} />
          <p key={index}>{pokemon.name}</p>
        </a>
      ))}
      <Box sx={{width:"100%"}}>
        <BarraProgresso value={progresso}/>
      </Box>
    </div>
  );
};
export default PokemonPage;