const NavBar = ({pokemonIndex, setPokemonIndex}) => {
    const handlePrev = () => setPokemonIndex(pokemonIndex -1);
    const handleNext = () => setPokemonIndex(pokemonIndex +1);

return (
    <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
    </div>
)
}

export default NavBar;