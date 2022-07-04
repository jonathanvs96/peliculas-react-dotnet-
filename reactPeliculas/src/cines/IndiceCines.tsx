import { urlCines } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { cineDTO } from "./cines.model";

export default function IndiceCines() {
  return (
    <div className="container my-4">
      <IndiceEntidad<cineDTO>
        url={urlCines}
        urlCrear="/cines/crear"
        titulo="Cines"
        nombreEntidad="cine"
      >
        {(cines, botones) => (
          <>
            <thead className="table-dark ">
              <tr>
                <th></th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {cines?.map((cine) => (
                <tr key={cine.id}>
                  <td>{botones(`/cines/editar/${cine.id}`, cine.id)}</td>
                  <td>{cine.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </div>
  );
}
