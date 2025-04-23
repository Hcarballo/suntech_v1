import './SeccionTrabajos.css';
import work_1 from '/src/assets/Trabajos/collage_cam_1.png';
import work_2 from '/src/assets/Trabajos/collage_funes_1.png';
import work_3 from '/src/assets/Trabajos/collage_roldan_1.png';
import work_4 from '/src/assets/Trabajos/dm_camaras.jpg';
import { useRef } from 'react';

const SeccionTrabajos = () => {
    const carruselRef = useRef(null);

    const scrollLeft = () => {
        carruselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carruselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='secciontrabajos'>
            <div className='titulotrabajos'>
                <h2>Nuestros Proyectos</h2>
            </div>

            <div className='carrusel-con-flechas'>
                <button className='flecha izquierda' onClick={scrollLeft}>‹</button>

                <div className='trabajos-carrusel' ref={carruselRef}>
                    <div className='imagenes-scroll'>
                        <img className='collage-img' src={work_1} alt="Proyecto 1" />
                        <img className='collage-img' src={work_2} alt="Proyecto 2" />
                        <img className='collage-img' src={work_3} alt="Proyecto 3" />
                        <img className='collage-img' src={work_4} alt="Proyecto 4" />
                    </div>
                </div>

                <button className='flecha derecha' onClick={scrollRight}>›</button>
            </div>
            <div className='galeria'>
                <h5>Galería</h5>
            </div>
        </div>
    );
};

export default SeccionTrabajos;