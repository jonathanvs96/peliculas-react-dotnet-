import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlCines } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { cineCreacionDTO } from "./cines.model";
import FormularioCines from "./FormularioCines";

export default function CrearCines() {
  const [errores, setErrores] = useState<string[]>([]);
  const navigate = useNavigate();

  async function crear(cine: cineCreacionDTO) {
    try {
      await axios.post(urlCines, cine);
      navigate("/cines");
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <div className="container mb-5">
      <h3>Crear Cines</h3>
      <MostrarErrores errores={errores} />
      <FormularioCines
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => await crear(valores)}
      />
    </div>
  );
}
