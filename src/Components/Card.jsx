import React from 'react';
import styles from "../Modules/card.module.scss"

const Card = ({ nombre, apellido }) => {
  return (
    <div className={styles.div}>
      <h2>Información Ingresada</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
    </div>
  );
};

export default Card;