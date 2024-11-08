import React, { useState } from 'react';
import Card from './Card';
import styles from "../Modules/form.module.scss"

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState("");
  const [mostrarCard, setCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3) {
      setError("Revise la informacion ingresada");
      setCard(false);
      return;
    }
    if (apellido.length < 6) {
      setError("Revise la informacion ingresada");
      setCard(false);
      return;
    }
    setError("");
    setCard(true);
  };

  return (
    <div className={styles.div}>
      <form onSubmit={handleSubmit}>
        <div class="nombre">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre" />
        </div>

        <div class="apellido">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese su apellido" />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {mostrarCard && <Card nombre={nombre} apellido={apellido} />}
    </div>
  );
};

export default Form;