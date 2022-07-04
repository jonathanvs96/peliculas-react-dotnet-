import { actorPeliculaDTO } from './../actores/actores.mode.d';
export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface landingPageDTO {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface peliculasPostGetDTO{
    generos: generoDTO[];
    cines: cineDTO[];
}