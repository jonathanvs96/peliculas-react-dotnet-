import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "./Button";
import confirmar from "./Confirmar";
import ListadoGenerico from "./ListadoGenerico";
import Paginacion from "./Paginacion";

export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {
  const [entidades, setEntidades] = useState<T[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    cargarDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, recordsPorPagina]);

  function cargarDatos() {
    axios
      .get(props.url, {
        params: { pagina, recordsPorPagina },
      })
      .then((respuesta: AxiosResponse<T[]>) => {
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));

        setEntidades(respuesta.data);
      });
  }

  async function borrar(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      cargarDatos();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const botones = (urlEditar: string, id: number) => (
    <>
      <Link className="btn btn-success" to={urlEditar}>
        Editar
      </Link>
      <Button
        className="btn btn-danger mx-2"
        onClick={() => confirmar(() => borrar(id))}
      >
        Borrar
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.titulo}</h3>
      <div className="form-inline my-3">
        <div className="form-group mr-3">
          <label>Registros por Página:</label>
          <select
            style={{ width: "150px" }}
            className="ml-1 form-control"
            defaultValue={10}
            onChange={(e) => {
              setPagina(1);
              setRecordsPorPagina(parseInt(e.currentTarget.value, 10));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <Link className="btn btn-primary" to={props.urlCrear}>
          Crear {props.nombreEntidad}
        </Link>
      </div>

      <ListadoGenerico listado={entidades}>
        <table className="table table-striped">
          {props.children(entidades!, botones)}
        </table>
      </ListadoGenerico>

      <Paginacion
        cantidadTotalDePaginas={totalDePaginas}
        paginaActual={pagina}
        onChange={(nuevaPagina) => setPagina(nuevaPagina)}
      />
    </>
  );
}

interface indiceEntidadProps<T> {
  url: string;
  urlCrear: string;
  children(
    entidades: T[],
    botones: (urlEditar: string, id: number) => ReactElement
  ): ReactElement;
  titulo: string;
  nombreEntidad: string;
}
