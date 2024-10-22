import React from 'react';

interface tareaProps {
  tarea: string;
  alEliminar: () => void;
}

const Tarea: React.FC<tareaProps> = ({ tarea, alEliminar }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm mb-3">
      <span className="text-gray-800 font-medium">{tarea}</span>
      <button onClick={alEliminar} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
        Eliminar
      </button>
    </div>
  );
};

export default Tarea;
