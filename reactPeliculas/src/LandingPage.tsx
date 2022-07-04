import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({
          enCartelera: [
          {
            id: 1, titulo: 'Spider-Man: Far from Home',
            poster: 'https://www.lahiguera.net/cinemania/pelicula/8850/spider_man_lejos_de_casa-cartel-8783.jpg'
          },
          {
            id: 2, titulo: 'Spider-Man: No Way Home',
            poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_*.jpg'
          },
          {
            id: 3, titulo: 'Doctor Strange in the Multiverse of Madness',
            poster: 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_*.jpg'
          }
        ],
        proximosEstrenos: [
          {
            id: 4, titulo: 'Top Gun: Maverick',
            poster: 'https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_*.jpg'
          },
          {
            id: 5, titulo: 'Jurassic World: Dominion',
            poster: 'https://m.media-amazon.com/images/M/MV5BZmQ1NDZjMTktMjFhZC00ZGY5LWEyMTMtNDhkOWM4NmMyZjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_*.jpg'
          },
          {
            id: 6, titulo: 'Lightyear',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_*.jpg'
          }
        ]
        });
      }, 1000);
      return () => clearTimeout(timerId);
    });

    return(
        <>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>

        <h3>Proximamente</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>        
        </>
    );

}