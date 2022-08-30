import React, { useState } from "react";
import "./agregar.css";
import { v4 as uuidv4 } from "uuid";
export default function ({ operacion, tarea = {} }) {
  const [prioridad, setPrioridad] = useState(tarea.prioridad);
  const [description, setDescription] = useState(tarea.description);
  return (
    <form
      onSubmit={() =>
        operacion({
          prioridad,
          description,
          id: tarea.id || uuidv4(),
          terminada: tarea.terminada || false,
        })
      }
      action="javascript:void(0);"
    >
      <input
        value={description}
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Agregá una Tarea "
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <select
        value={prioridad}
        name="prioridad"
        id="prioridad"
        onChange={(ev) => setPrioridad(ev.target.value)}
      >
        <option value="" disabled>
          Prioridad*
        </option>
        <option value="prioridad-baja">Baja</option>
        <option value="prioridad-media">Media</option>
        <option value="prioridad-alta">Alta</option>
      </select>
      <button id="agregar">{tarea.id ? "Guardar cambio!" : "Agregar!"}</button>
    </form>
  );
}
