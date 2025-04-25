import "./SeccionNosotros.css"
import iso_9001 from "../../assets/Logos/iso_9001.png";
import iso_50001 from "../../assets/Logos/iso_50001.png";
import iso_14001 from "../../assets/Logos/iso_14001.png";
import Socio_1 from "../../assets/Nosotros/Jonatan.png"
import Socio_2 from "../../assets/Nosotros/Hernan.png"

const SeccionNosotros = () => {
  return (
    <div className="seccionnosotros" id="nos">
      <div className="box-staff-tittle">
        <h2>Nuestro Staff</h2>
      </div>
      <div className="contenedor-flex">
        {/* Columna izquierda: cards + texto */}
        <div className="columna-izquierda">
          <div className="tarjetas">
            <div className="seccionnosotros-card">
              <div className="seccionnosotros-card-img-container">
                <img
                  src={Socio_1}
                  alt="Foto del empleado"
                  className="seccionnosotros-card-img"
                />
              </div>
              <div className="seccionnosotros-card-body">
                <h3 className="seccionnosotros-card-title">Ing. Jonatan Moran</h3>
                <h5 className="seccionnosotros-card-description">Socio</h5>
              </div>
            </div>
            <div className="seccionnosotros-card">
              <div className="seccionnosotros-card-img-container">
                <img
                  src={Socio_2}
                  alt="Foto del empleado"
                  className="seccionnosotros-card-img"
                />
              </div>
              <div className="seccionnosotros-card-body">
                <h3 className="seccionnosotros-card-title">Ing. Hernán Carballo</h3>
                <h5 className="seccionnosotros-card-description">Socio</h5>
              </div>
            </div>
          </div>
          <div className="texto">
            <p>
              Diseñamos proyectos personalizados que se adapten perfectamente a tus necesidades. Desde el diseño inicial hasta la puesta en marcha, garantizamos un servicio integral que optimiza la eficiencia energética de tu hogar o empresa. Con un fuerte enfoque en la innovación y calidad, transformamos la energía solar en una opción accesible, rentable y beneficiosa para todos.
            </p>
          </div>
        </div>

        {/* Columna derecha: staff */}
        <div className="columna-derecha">
          <h4 className="staff-title">Contamos con los siguientes Profesionales</h4>
          <ul className="staff-list">
            <li>– Ingeniero Electrónico</li>
            <li>– Ingeniero en Sistemas</li>
            <li>– Ingeniero Civil</li>
            <li>– Gestor Prosumidor 4.0 (EPE)</li>
            <li>– Consultor Normas ISO 9001</li>
            <li>– Consultor Normas ISO 50001</li>
            <li>– Consultor Normas ISO 14001</li>
          </ul>
          <div className="iso-logos mt-4 d-flex flex-wrap  gap-3">
            <img src={iso_9001} alt="ISO 9001" className="iso-logo" />
            <img src={iso_50001} alt="ISO 50001" className="iso-logo" />
            <img src={iso_14001} alt="ISO 14001" className="iso-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeccionNosotros