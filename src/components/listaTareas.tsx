import React, { useState, useEffect } from 'react';
import AgregarTarea from './agregarTarea';
import Tarea from './tarea';

const ListaTareas: React.FC = () => {

  const [tareas, setTareas] = useState<string[]>(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea: string) => {
    setTareas((tareasPrevias) => [tarea, ...tareasPrevias]);

  };

  const eliminarTarea = (indice: number) => {
    setTareas((tareasPrevias) => tareasPrevias.filter((_, i) => i !== indice));
  };

  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
  <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To Do List</h1>
  <AgregarTarea alAgregarTarea={agregarTarea} />
  <div className="mt-5">
    {tareas.length === 0 ? (
      <p className="text-gray-500 text-center">No hay tareas, agrega una</p>
    ) : (
      tareas.map((tarea, indice) => (
        <Tarea
          key={indice}
          tarea={tarea}
          alEliminar={() => eliminarTarea(indice)}
        />
      ))
    )}
  </div>
</div>

  );
};

export default ListaTareas;
