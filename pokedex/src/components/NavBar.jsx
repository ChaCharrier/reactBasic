const NavBar = ({pokemonIndex, setPokemonIndex}) => {
    const handlePrev = () => setPokemonIndex(pokemonIndex -1);
    const handleNext = () => setPokemonIndex(pokemonIndex +1);

    if(pokemonIndex === 3) {
        alert ("pika pikachu !!!");
    }

return (
    <div>
        {/* <button 
        key= {pokemonIndex.name}
        name= {pokemonIndex.name}
    /> */}
    <button onClick={handlePrev}>Previous</button>
    <button onClick={handleNext}>Next</button> 
    </div>
)
}

export default NavBar;

// créer un composant bouton qui sera appelé autant de fois qu'il y a de pokemon

// boucler sur pokemonList dans le return du composant avec map, mettre des key uniques à chaque bouton
 