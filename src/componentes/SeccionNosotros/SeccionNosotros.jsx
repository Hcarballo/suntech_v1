import "./SeccionNosotros.css"

const SeccionNosotros = () => {
  return (
    <div className="seccionnosotros" id="s_five">
      <div className="tarjetas">
        <div className="seccionnosotros-card">
          <div className="seccionnosotros-card-img-container">
            <img src="https://th.bing.com/th/id/OIP.BoaeFLouH9s_mSMHKpQnzAHaGV?rs=1&pid=ImgDetMain" alt="Foto del empleado" className="seccionnosotros-card-img" />
          </div>
          <div className="seccionnosotros-card-body">
            <h3 className="seccionnosotros-card-title">Ing. Jonatan Moran</h3>
            <h5 className="seccionnosotros-card-description">Socio</h5>
            <p className="seccionnosotros-card-description">Ingeniero Electrónico</p>
            <p className="seccionnosotros-card-description">Master en Inteligencia Artificial</p>
            <p className="seccionnosotros-card-description">Profesor en la Universidad Católica (UCA)</p> 
          </div>
        </div>
        <div className="seccionnosotros-card">
          <div className="seccionnosotros-card-img-container">
            <img src="https://d.newsweek.com/en/full/2335139/young-business-owner.jpg" alt="Foto del empleado" className="seccionnosotros-card-img" />
          </div>
          <div className="seccionnosotros-card-body">
            <h3 className="seccionnosotros-card-title">Ing. Hernán Carballo</h3>
            <h5 className="seccionnosotros-card-description">Socio</h5>
            <p className="seccionnosotros-card-description">Ingeniero en Sistemas</p>
            <p className="seccionnosotros-card-description">Desarrollador Full Stack</p>
            <p className="seccionnosotros-card-description">Master en Inteligencia Artificial</p> 
          </div>
        </div>
      </div>
      <div className="texto">
        <h4> Diseñamos proyectos personalizados que se adapten perfectamente a tus necesidades. Desde el diseño inicial hasta la puesta en marcha, garantizamos un servicio integral que optimiza la eficiencia energética de tu hogar o empresa. Con un fuerte enfoque en la innovación y calidad, transformamos la energía solar en una opción accesible, rentable y beneficiosa para todos.</h4>
      </div>
    </div>
  )
}

export default SeccionNosotros