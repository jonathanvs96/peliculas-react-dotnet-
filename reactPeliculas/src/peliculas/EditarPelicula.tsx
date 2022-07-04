import { actorCreacionDTO, actorPeliculaDTO } from "../actores/actores.mode";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
  const generosNoSeleccionados: generoDTO[] = [
    { id: 3, nombre: "Drama" },
    { id: 4, nombre: "Terror" },
    { id: 5, nombre: "Romantico" },
  ];
  const generosSeleccionados: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Comedia" },
    { id: 6, nombre: "Super Heroes" },
  ];

  const cinesSeleccionados: cineDTO[] = [{ id: 1, nombre: "Cinepolis" }];
  const cinesNoSeleccionados: cineDTO[] = [
    { id: 2, nombre: "Citicinemas" },
    { id: 3, nombre: "Cinemex" },
  ];

  const actoresSeleccionados: actorPeliculaDTO[] = [
    {
      id: 4,
      nombre: "Robert Pattinson",
      personaje: "Bruce Wayne / The Batman",
      foto: "https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_*.jpg",
    },
    {
      id: 5,
      nombre: "Zoë Kravitz",
      personaje: "Selina Kyle / Catwoman",
      foto: "https://m.media-amazon.com/images/M/MV5BM2NmMWViOTYtOGJhYi00MzU2LWI5ODYtOGJhYzhkMWViODY5XkEyXkFqcGdeQXVyNjk2NTA3MTc@._V1_*.jpg",
    },
    {
      id: 6,
      nombre: "Jeffrey Wright",
      personaje: "Lt. James Gordon",
      foto: "https://m.media-amazon.com/images/M/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_*.jpg",
    },
  ];

  return (
    <>
      <h3 className="container">Editar Peliculas</h3>

      <FormularioPeliculas
        actoresSeleccionados={actoresSeleccionados}
        cinesNoSeleccionado={cinesNoSeleccionados}
        cinesSeleccionado={cinesSeleccionados}
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
        modelo={{
          titulo: "The Batman",
          enCines: true,
          trailer: "url",
          fechaLanzamiento: new Date("2021-12-17T00:00:00"),
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
