import PropTypes from "prop-types";
import React from "react";

const SecondsCounter= ({segundos})=>{
    const formatearSegundos = (segundos) =>{
        const stri = segundos.toString().padStart(6, '0');
        return stri.split('');
    };
    
    const digitos = formatearSegundos(segundos)
    

    return (
        <div className="contador">
            <div className="icono-reloj">
                <i className="fa fa-clock-o"></i>
            </div>
            {digitos.map((digito, indice)=>(
                <div key={indice} className="digito">
                    {digito}
                </div>
            ))}

        </div>
    );
};
SecondsCounter.propTypes = {
    segundos: PropTypes.number
};

export default SecondsCounter;
