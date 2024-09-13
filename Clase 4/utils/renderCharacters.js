// const appenListItem = (parent) => (text) => {
//     const li = document.createElement('li');
//     li.textContent = text;
//     parent.appendChild(li);
// }


export const renderCharacter = ( {name, thumbnail, description, comics, series }) =>  {

    // crear el contendor
    const container = document.createElement('figure');
    container.classList.add("character-card");

    // cerar las etiquetas vacias
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const h3Comic = document.createElement('h3');
    const ulComics = document.createElement('ul');
    const h3Series = document.createElement('h3');
    const ulSeries = document.createElement('ul');

    // llenar las eriquetsa socn contenido recibido de la dat
    img.src = thumbnail;
    h2.textContent = name;
    p.textContent = description;
    h3Comic.textContent = 'Comics: ';
    h3Series.textContent = 'Series: ';

    // solo senecesita el pariente a quien vamos a agregar la info

    // comics.forEach(appenListItem(ulComics));
    // series.forEach(appenListItem(ulSeries));

    comics.forEach(comic =>  {
        const li = document.createElement('li')
        li.textContent = comic;
        ulComics.appendChild(li);
    });

    series.forEach(serie =>  {
        const li = document.createElement('li')
        li.textContent = serie;
        ulSeries.appendChild(li);
    });
    
    // vincular las etiqueras con contenido en cel contenedot
    container.appendChild(img);
    container.appendChild(h2);
    container.appendChild(p);
    container.appendChild(h3Comic);
    container.appendChild(ulComics);
    container.appendChild(h3Series);
    container.appendChild(ulSeries);

    // retornar el contenedor ocn informacion
    return figure;
};



// const renderCharacter = ( {name, thumbnail, description, comics, series } esta esperando un objeto) =>  {



    // const appenListItem = (parent) => (element) => {
    //     const li = document.createElement('li');
    //     li.textContent = element;
    //     parent.appendChild(li);
    // }
    // a quiens e le va a agregar esa lista --> primer parentesis

    // el pareiete nos ifica donde vamos a poner la ByteLengthQueuingStrategyel elemnt es el texto


   