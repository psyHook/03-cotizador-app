import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helpers/helper';
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
    background-color: #00838f ;
    padding: 1rem;
    text-align: center;
    color: #FFF;
    margin-top: 1rem;

`;

const Resumen = ({ datos }) => {
  // Extraer datos
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;
