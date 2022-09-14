import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculaAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";

export default function CrearPeliculas() {
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<
    generoDTO[]
  >([]);
  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>(
    []
  );
  const [cargado, setCargado] = useState(false);
  const [errores, setErrores] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlPeliculas}/postget`)
      .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
        setGenerosNoSeleccionados(respuesta.data.generos);
        setCinesNoSeleccionados(respuesta.data.cines);
        setCargado(true);
      });
  }, []);

  async function crear(pelicula: peliculaCreacionDTO) {
    const formData = convertirPeliculaAFormData(pelicula);

    try {
      await axios({
        method: "post",
        url: urlPeliculas,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((respuesta: AxiosResponse<number>) => {
        navigate(`/pelicula/${respuesta.data}`);
      });
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <div className="container mb-5">
      <h3>Crear Peliculas</h3>
      {/* <MostrarErrores errores={errores} /> */}
      {cargado ? (
        <FormularioPeliculas
          actoresSeleccionados={[]}
          cinesNoSeleccionado={cinesNoSeleccionados}
          cinesSeleccionado={[]}
          generosNoSeleccionados={generosNoSeleccionados}
          generosSeleccionados={[]}
          modelo={{ titulo: "", enCines: false, trailer: "" }}
          onSubmit={async (valores) => crear(valores)}
        />
      ) : (
        <Cargando />
      )}
    </div>
  );
}
