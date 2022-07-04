import { generoCreacionDTO as cineCreacionDTO } from "../generos/generos.model";
import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoints";
import { cineDTO } from "./cines.model";
import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <EditarEntidad<cineCreacionDTO, cineDTO>
      url={urlCines}
      urlIndice="/cines"
      nombreEntidad="Cines"
    >
      {(entidad, editar) => (
        <FormularioCines
          modelo={entidad}
          onSubmit={async (valores) => {
            await editar(valores);
          }}
        />
      )}
    </EditarEntidad>
  );
}
