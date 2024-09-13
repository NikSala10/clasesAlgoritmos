import data from "./data/characters"
import  {renderCharacter} from "./data/characters" 

// contenedor app del html
const container = document.querySelector('.app')

data.forEach(character => {
    // crear el personaje, se recorre y se da un personaje
  const characterFigure = renderCharacter(character);
    
//   agtegar el personaje al contedendor app, se captura el personaje
  container.appendChild(characterFigure);
});

// qiien mporta, utiliza la data y la funcion