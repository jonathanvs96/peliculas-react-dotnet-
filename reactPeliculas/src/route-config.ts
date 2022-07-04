import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";

import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";

import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPelicula";
import EditarPeliculas from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";

const rutas = [
    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id', componente: EditarCines},
    {path: '/cines', componente: IndiceCines},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id', componente: EditarActores},
    {path: '/actores', componente: IndiceActores},
    
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/', componente: LandingPage},
    // {path: '*', componente: LandingPage}
];

export default rutas;