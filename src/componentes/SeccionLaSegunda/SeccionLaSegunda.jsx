import './SeccionLaSegunda.css';
import la_segunda_logo from "../../assets/Logos/logo_la2.jpg";

const SeccionSeguros = () => {
  return (
    <section className="seccionseguros">
      <div className="contenido-seguros">

        <div className="logo-seguros">
          <img
            src={la_segunda_logo}
            alt="La Segunda Seguros"
          />
        </div>

        <div className="texto-seguros">
          <h1>Asegurá tu instalación con La Segunda</h1>

          <p>
            Protegé tu inversión y disfrutá de tu instalación con mayor
            tranquilidad. Consultá por las opciones de cobertura de
            <strong> La Segunda Seguros</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SeccionSeguros;