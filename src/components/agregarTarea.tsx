import React, { useState } from 'react';

interface agregarTareaProps {
  alAgregarTarea: (tarea: string) => void;
}

const AgregarTarea: React.FC<agregarTareaProps> = ({ alAgregarTarea }) => {
  const [tarea, setTarea] = useState<string>('');

  const agregarTarea = () => {
    if (tarea.trim()) {
      alAgregarTarea(tarea);
      setTarea(''); 
    }
  };

  return (
    <div>
      <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder="Tareas por hacer"
      />
      <button onClick={agregarTarea}>
        Agregar
      </button>
    </div>
  );
};

export default AgregarTarea;
