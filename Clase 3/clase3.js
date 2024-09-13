import sum from  './utilMatch';
// importar el nombre desde donde
import  {sum, multiply} from './utilMatch '  //para los export normales
// cuando se quiere exportar solo un modlu de ese bjeto, la segunda opcion de export. Esta se utilizaba antes


import sum from './utilMatch'; // para los export por defecto

const value = sum(2,2)
console.log(value);

// hay que llamar la funcion
// como el returna hay que capturarlo en una
// variable, si hay que poenrle valores a la funcion ahy que ponerselos, hay que guarar ese retorno enn una variable

// para ayor organizacion es mejor crear varios archivos con las funciones que se van a exportar, osea un documento para cada funcion. Se pueede cera una carpeta de Uyils, y ahi poner los docs

import lodash from 'lodash';
// exportar todas las funciones bajo ese arreghlo

const sentence = "Esto es un emhemplo de texto con lodash";
const capitalizeSentence = lodash.capitalize(sentence);
console.log(capitalizeSentence);
