import './SeccionTrabajos.css';
import work_1 from '../../assets/Trabajos/collage_cam_1.png';
import work_2 from '../../assets/Trabajos/collage_funes_1.png';
import work_3 from '../../assets/Trabajos/collage_roldan_1.png';
import work_4 from '../../assets/Trabajos/dm_camaras.jpg';
import work_5 from '../../assets/Trabajos/20250327_120527.jpg';
import work_6 from '../../assets/Trabajos/20250327_121523.jpg';
import work_7 from '../../assets/Trabajos/20250403_130845.jpg';
import work_8 from '../../assets/Trabajos/20250403_192355.jpg';
import work_9 from '../../assets/Trabajos/20250405_184612.jpg';
import work_10 from '../../assets/Trabajos/20250405_191123.jpg';
import work_11 from '../../assets/Trabajos/20250405_191159.jpg';
import work_12 from '../../assets/Trabajos/20250412_122915.jpg';
import work_13 from '../../assets/Trabajos/20250412_122953.jpg';
import work_14 from '../../assets/Trabajos/Image_1744408737412.jpg';
import work_15 from '../../assets/Trabajos/Screenshot_20250411_172806_Gallery.jpg';
import work_16 from '../../assets/Trabajos/Screenshot_20250411_173526_Gallery.jpg';

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
                        <img className='collage-img' src={work_5} alt="Proyecto 1" />
                        <img className='collage-img' src={work_6} alt="Proyecto 2" />
                        <img className='collage-img' src={work_7} alt="Proyecto 3" />
                        <img className='collage-img' src={work_8} alt="Proyecto 4" />
                        <img className='collage-img' src={work_9} alt="Proyecto 1" />
                        <img className='collage-img' src={work_10} alt="Proyecto 2" />
                        <img className='collage-img' src={work_11} alt="Proyecto 3" />
                        <img className='collage-img' src={work_12} alt="Proyecto 4" />
                        <img className='collage-img' src={work_13} alt="Proyecto 1" />
                        <img className='collage-img' src={work_14} alt="Proyecto 2" />
                        <img className='collage-img' src={work_15} alt="Proyecto 3" />
                        <img className='collage-img' src={work_16} alt="Proyecto 4" />
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