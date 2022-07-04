import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import { actorCreacionDTO } from "./actores.mode";
import FormularioActores from "./FormularioActores";

export default function CrearActores() {
  const [errores, setErrores] = useState<string[]>([]);
  const navigate = useNavigate();

  async function crear(actor: actorCreacionDTO) {
    try {
      const formData = convertirActorAFormData(actor);
      await axios({
        method: "post",
        url: urlActores,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/actores");
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <div className="container">
      <div className="container">
        <h3>Crear Actores</h3>
      </div>
      <MostrarErrores errores={errores} />
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={async (valores) => await crear(valores)}
      />
    </div>
  );
}
