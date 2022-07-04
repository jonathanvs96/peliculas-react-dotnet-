import EditarEntidad from "../utils/EditarEntidad";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/formDataUtils";
import { actorCreacionDTO, actorDTO } from "./actores.mode";
import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  const transformar = (actor: actorDTO) => {
    return {
      nombre: actor.nombre,
      fotoURL: actor.foto,
      biografia: actor.biografia,
      fechaNacimiento: new Date(actor.fechaNacimiento),
    };
  };

  return (
    <div className="container">
      <EditarEntidad<actorCreacionDTO, actorDTO>
        url={urlActores}
        urlIndice="/actores"
        nombreEntidad="Actores"
        transformarFormData={convertirActorAFormData}
        transformar={transformar}
      >
        {(entidad, editar) => (
          <FormularioActores
            modelo={entidad}
            onSubmit={async (valores) => await editar(valores)}
          />
        )}
      </EditarEntidad>
    </div>
  );
}
