import "./App.css";
import Mostrar from "./componentes/Mostrar/mostrar";
import Agregar from "./componentes/Agregar/agregar";
import { useState } from "react";

function App() {
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const insertarTarea = (tarea) => {
    setListaDeTareas(
      [...listaDeTareas, tarea].sort((a, b) => {
        console.log(a, b);
        if (a.prioridad === "prioridad-alta") {
          return -1;
        }
        if (a.prioridad === "prioridad-baja") {
          return 1;
        }
        if (
          (a.prioridad === "prioridad-media") >
          (b.prioridad === "prioridad-baja")
        ) {
          return 1;
        }
        if (
          (a.prioridad === "prioridad-media") >
          (b.prioridad === "prioridad-alta")
        ) {
          return -1;
        }
        return 0;
      })
    );
  };
  const borrarTarea = (borrarTarea) => {
    const tareasActualizadas = [...listaDeTareas].filter(
      (tareaNueva) => tareaNueva.id !== borrarTarea.id
    );
    setListaDeTareas(tareasActualizadas);
  };

  const editarTarea = (tareaAEditar) => {
    const copia = [...listaDeTareas];
    const encontrarTarea = (tarea) => tarea.id === tareaAEditar.id;
    let indice = listaDeTareas.findIndex(encontrarTarea);
    copia[indice] = { ...tareaAEditar };
    setListaDeTareas(copia);
  };

  return (
    <main>
      <h1> LISTA DE TAREAS </h1>
      <Agregar operacion={insertarTarea} />
      <Mostrar
        tareas={listaDeTareas}
        borrada={borrarTarea}
        editar={editarTarea}
      />
    </main>
  );
}
export default App;
