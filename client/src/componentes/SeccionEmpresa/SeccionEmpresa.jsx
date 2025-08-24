import React from "react";
import "./SeccionEmpresa.css";

const SeccionEmpresa = () => {
  return (
    <div className="seccion-empresa">
      <div className="contenedor">
        <h2 className="titulo-principal">Quiénes Somos</h2>
        <p className="quienes-somos">
          Somos una empresa dedicada a transformar la forma en que las personas y organizaciones consumen energía.
          Brindamos soluciones integrales en energías renovables, diseñadas para hogares, industrias y establecimientos rurales.
          <br /><br />
          Contamos con un equipo altamente capacitado que trabaja con profesionalismo, responsabilidad y pasión.
          Nos adaptamos a las necesidades de cada cliente, ofreciendo alternativas sustentables que generan un ahorro real
          y promueven un estilo de vida más consciente.
          <br /><br />
          Creemos en un futuro más limpio, eficiente y seguro. Por eso, trabajamos día a día con un fuerte enfoque en la calidad,
          la innovación y la satisfacción de nuestros clientes.
        </p>

        <div className="bloques-dos-columnas">
          <div className="columna-izquierda_">
            <div className="bloque mision">
              <h3>Misión</h3>
              <p>
                Brindar soluciones eficientes, sustentables y accesibles en energías renovables, mejorando la calidad de vida de nuestros clientes
                y promoviendo el uso responsable de los recursos naturales.
              </p>
            </div>

            <div className="bloque vision">
              <h3>Visión</h3>
              <p>
                Ser una empresa referente en innovación energética y tecnología aplicada, reconocida por la calidad de nuestros servicios,
                el compromiso ambiental y la cercanía con nuestros clientes, contribuyendo activamente a un futuro más sustentable.
              </p>
            </div>
          </div>

          <div className="bloque valores">
            <h3>Valores</h3>
            <ul>
              <li><strong>Compromiso:</strong> Trabajamos con responsabilidad y dedicación en cada proyecto.</li>
              <li><strong>Innovación:</strong> Incorporamos tecnología de vanguardia para ofrecer soluciones eficientes.</li>
              <li><strong>Calidad:</strong> Garantizamos resultados duraderos y de excelencia adecuados a cada necesidad.</li>
              <li><strong>Sustentabilidad:</strong> Promovemos el uso racional de la energía y el cuidado del medio ambiente.</li>
              <li><strong>Cercanía:</strong> Escuchamos a nuestros clientes y brindamos atención personalizada.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionEmpresa;
