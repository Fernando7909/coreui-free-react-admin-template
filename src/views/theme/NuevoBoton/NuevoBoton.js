import React, { useState } from 'react';
import { CCard, CCardHeader, CCardBody, CButton } from '@coreui/react';

const NuevoBoton = () => {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const handleButtonClick = () => {
    setMensajeVisible(!mensajeVisible);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>Nuevo Botón</CCardHeader>
      <CCardBody>
        <CButton color="primary" onClick={handleButtonClick}>
          {mensajeVisible ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
        </CButton>
        {mensajeVisible && (
          <div className="mt-3">
            <h5>¡Hola!</h5>
          </div>
        )}
      </CCardBody>
    </CCard>
  );
};

export default NuevoBoton;
