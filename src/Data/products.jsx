/*En este archivo al que he llamado product.js, he declarado una constante con un array de productos, el cual a la vez estoy exportando con la palabra reservada "export" de esa manera podré importarla desde el componente que así lo requiera
*/
export const arrayProducts = [
    {
        id: 1,
        name: 'Uncharted',
        category: 'Games',
        stock: 5,
        price: 40,
        img: 'https://gorilagames.com/img/Public/1019-producto-uncharted-6535.jpg',
        description: 'Recopilación para PlayStation 4 de los tres videojuegos de Uncharted protagonizados por Nathan Drake en PlayStation 3. Los juegos funcionan en PS4 a una resolución de 1080p y 60 imágenes por segundo, contando con mejoras de iluminación, texturas y modelado sobre los juegos originales.',
        platforms: ['ps4 '],
    },
    {
        id: 2,
        name: 'Red Dead',
        category: 'Games',
        stock: 4,
        price: 35,
        img: 'https://gorilagames.com/img/Public/1019-producto-red-dead-redemption-2-ps4-1383.jpg',
        description: 'Red Dead Redemption 2 es un videojuego de mundo abierto ambientado en el corazón de América en el año 1899 y desarrollado por Rockstar, creadores de GTA V y Red Dead Redemption entre otros premiados títulos de perfil sandbox. La historia de Arthur Morgan, (no Nate Harlow héroe de Red Dead Revolver, ni tampoco John Marston, el protagonista del Redemption original) es una aventura western con una extraordinaria atmósfera y ambientación muy cuidada y centrada en la naturaleza que, además de modo individual de juego, también presenta multijugador centrado en seguir la senda de GTA Online.',
        platforms: ['ps4 '],
    },
    {
        id: 3,
        name: 'Fifa 23',
        category: 'Games',
        stock: 3,
        price: 60,
        img: 'https://gorilagames.com/img/Public/1019-producto-fifa-23-ps4-digital-5875.jpg',
        description: 'FIFA 23 es un simulador de fútbol de EA Sports, el último bajo esta denominación, que busca ofrecer al usuario el mejor videojuego de fútbol de la historia con más características, modos de juego, contenido del Mundial, clubes, ligas, competiciones y jugadores. Por el momento no se ha profundizado en aspectos más concretos de la propuesta, pero se puede esperar el regreso del modo Carrera, Volta así como el exitoso Ultimate Team, así como una extensa cartera de licencias.',
        platforms: ['ps4 '],
    },
    {
        id: 4,
        name: 'NBA 2K 22',
        category: 'Games',
        stock: 7,
        price: 35,
        img: 'https://gorilagames.com/img/Public/1019-producto-nba-2k22-ps4-3847.jpg',
        description: 'NBA 2K22 vuelve un año más a las tiendas con el objetivo de poner el universo del baloncesto al completo en las manos de los jugadores, permitiendo jugar en pabellones reales de la NBA y la WNBA contra equipos y jugadores auténticos, construir su propio equipo de ensueño en MyTeam con las estrellas de hoy y las leyendas de ayer, emprender su propio camino profesional en MiCarrera y definir su ascenso a la NBA. Con NBA 2K22 Visual Concepts busca brindar al usuario la mejor presentación visual e inteligencia artificial y una amplia variedad de experiencias.',
        platforms: ['ps4 '],
    },

    {
        id: 5,
        name: 'WRC 10',
        category: 'Games',
        stock: 6,
        price: 40,
        img: 'https://gorilagames.com/img/Public/1019-producto-wrc10-7158.jpg',
        description: 'WRC 10 es el videojuego oficial del Campeonato Mundial de Rally para la temporada 2021, un simulador de carreras todoterreno que busca reinventarse permitiendo a los jugadores revivir los momentos más intensos al volante de coches icónicos para celebrar los 50 años de la competición.',
        platforms: ['ps4'],
    },

    {
        id: 6,
        name: 'the last of US',
        category: 'Games',
        stock: 8,
        price: 50,
        img: 'https://gorilagames.com/img/Public/1019-producto-the-last-of-us-part-i-2-6674.jpg',
        description: 'The Last of Us es un videojuego de acción, aventura y supervivencia desarrollado por Naugthy Dog, los creadores de Uncharted. TLoU nos presenta un escenario en el que la población ha sido diezmada por una terrible plaga, y los supervivientes se están matando entre sí por la comida y las armas. Los protagonistas son Joel, y Ellie una valiente adolescente, que deberán colaborar para sobrevivir en su peligroso viaje a través de los EE.UU.',
        platforms: ['ps5 '],
    },

    {
        id: 7,
        name: 'Consola ps4',
        category: 'Consolas',
        stock: 3,
        price: 550,
        img: 'https://gorilagames.com/img/Public/1019-producto-ps4-slim-megapack-13-death-stranding-gof-of-war-gta-1-4447.jpg',
        description: 'Consola ps4 con 3 juegos',
        platforms: ['ps4'],
    },

    {
        id: 8,
        name: 'x-box s',
        category: 'Consolas',
        stock: 2,
        price: 600,
        img: 'https://gorilagames.com/img/Public/1019-producto-xbox-series-s-7041.jpg',
        description: 'Consola x-box s',
        platforms: ['x-box'],
    },

]
