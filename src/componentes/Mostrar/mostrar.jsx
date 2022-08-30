import React, { useState } from "react";
import "./mostrar.css";
import Agregar from "../Agregar/agregar";

export default function MostrarTarea({ tareas, borrada, editar }) {
  const tachar = (tarea) => {
    tarea.terminada = !tarea.terminada;
    editar(tarea);
  };
  const [idDeTareaQueEstoyEditando, setIdDeTareaQueEstoyEditando] = useState();
  const guardarCambio = (tarea) => {
    editar(tarea);
    setIdDeTareaQueEstoyEditando();
  };

  return (
    <>
      <h3>TAREAS</h3>
      {tareas.length == 0 ? (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      ) : (
        <ul id="lista-tareas">
          {tareas.map((tarea) => (
            <li
              className={tarea.prioridad}
              key={tarea.id}
              style={{
                textDecoration: tarea.terminada ? "line-through" : "none",
              }}
            >
              {tarea.id !== idDeTareaQueEstoyEditando && (
                <input
                  onChange={() => tachar(tarea)}
                  id="checkbox"
                  className="pepe"
                  type="checkbox"
                  checked={tarea.terminada}
                ></input>
              )}
              {tarea.id == idDeTareaQueEstoyEditando ? (
                <Agregar tarea={tarea} operacion={guardarCambio} />
              ) : (
                <> {tarea.description}</>
              )}
              {tarea.id !== idDeTareaQueEstoyEditando && (
                <>
                  <button className="borrar" onClick={() => borrada(tarea)}>
                    Borrar
                  </button>

                  <button
                    onClick={() => setIdDeTareaQueEstoyEditando(tarea.id)}
                    className="editar"
                  >
                    Editar
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <p className="tips">
        Tip: Pueden borrar tareas clickeando en el boton "Borrar"
      </p>
      <p className="tips">
        Tip: Pueden editar tareas clickeando en el boton "Editar"
      </p>
    </>
  );
}
