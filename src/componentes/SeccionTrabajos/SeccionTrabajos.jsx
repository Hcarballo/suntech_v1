import './SeccionTrabajos.css';

import work_1 from '../../assets/Trabajos/20250327_120527.webp';
import work_2 from '../../assets/Trabajos/20250327_121523.webp';
import work_3 from '../../assets/Trabajos/20250403_130845.jpg';
import work_4 from '../../assets/Trabajos/20250403_192355.jpg';
import work_5 from '../../assets/Trabajos/20250405_184612.jpg';
import work_6 from '../../assets/Trabajos/20250405_191123.jpg';
import work_7 from '../../assets/Trabajos/20250405_191159.jpg';
import work_8 from '../../assets/Trabajos/20250412_122915.webp';
import work_9 from '../../assets/Trabajos/20250412_122953.webp';
import work_10 from '../../assets/Trabajos/20250602_165754.jpg';
import work_11 from '../../assets/Trabajos/bomba_pile_fh.png';
import work_12 from '../../assets/Trabajos/carportsolar.png';
import work_13 from '../../assets/Trabajos/collage_cam_1.png';
import work_14 from '../../assets/Trabajos/collage_funes_1.png';
import work_15 from '../../assets/Trabajos/collage_roldan_1.png';
import work_16 from '../../assets/Trabajos/conexion.png';
import work_17 from '../../assets/Trabajos/dm_camaras.jpg';
import work_18 from '../../assets/Trabajos/don_mateo_paneles.png';
import work_19 from '../../assets/Trabajos/granja.png';
import work_20 from '../../assets/Trabajos/inst_SN1.jpg';
import work_21 from '../../assets/Trabajos/inst_SN3.jpg';
import work_22 from '../../assets/Trabajos/inst_SN4.jpg';
import work_23 from '../../assets/Trabajos/inst_SN5.jpg';
import work_24 from '../../assets/Trabajos/inv_deyeSN.jpg';
import work_25 from '../../assets/Trabajos/jhoni.png';
import work_26 from '../../assets/Trabajos/motorhome_ad.png';
import work_27 from '../../assets/Trabajos/motorhome.png';
import work_28 from '../../assets/Trabajos/raul.png';
import work_29 from '../../assets/Trabajos/san_sebastian.jpg';
import work_30 from '../../assets/Trabajos/Screenshot_20250411_172806_Gallery.jpg';
import work_31 from '../../assets/Trabajos/yo.jpg';
import work_32 from '../../assets/Trabajos/oncativo.png';
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
                        <img className='collage-img' src={work_17} alt="Proyecto 4" />
                        <img className='collage-img' src={work_18} alt="Proyecto 4" />
                        <img className='collage-img' src={work_19} alt="Proyecto 4" />
                        <img className='collage-img' src={work_20} alt="Proyecto 4" />
                        <img className='collage-img' src={work_21} alt="Proyecto 4" />
                        <img className='collage-img' src={work_22} alt="Proyecto 4" />
                        <img className='collage-img' src={work_23} alt="Proyecto 4" />
                        <img className='collage-img' src={work_24} alt="Proyecto 4" />
                        <img className='collage-img' src={work_25} alt="Proyecto 4" />
                        <img className='collage-img' src={work_26} alt="Proyecto 4" />
                        <img className='collage-img' src={work_27} alt="Proyecto 4" />
                        <img className='collage-img' src={work_28} alt="Proyecto 4" />
                        <img className='collage-img' src={work_29} alt="Proyecto 4" />
                        <img className='collage-img' src={work_30} alt="Proyecto 4" />
                        <img className='collage-img' src={work_31} alt="Proyecto 4" />   
                        <img className='collage-img' src={work_32} alt="Proyecto 4" />                   
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