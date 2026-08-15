import './SeccionTrabajos.css';

import work_1 from '../../assets/Trabajos/1.jpg';
import work_2 from '../../assets/Trabajos/2.jpg';;
import work_3 from '../../assets/Trabajos/3.jpg';
import work_4 from '../../assets/Trabajos/4.jpg';
import work_5 from '../../assets/Trabajos/5.webp';
import work_6 from '../../assets/Trabajos/6.webp';
import work_7 from '../../assets/Trabajos/7.jpg';
import work_8 from '../../assets/Trabajos/8.png';
import work_9 from '../../assets/Trabajos/9.png';
import work_10 from '../../assets/Trabajos/10.png';
import work_11 from '../../assets/Trabajos/11.png';
import work_12 from '../../assets/Trabajos/12.png';
import work_13 from '../../assets/Trabajos/13.png';
import work_14 from '../../assets/Trabajos/14.png';
import work_15 from '../../assets/Trabajos/15.png';
import work_16 from '../../assets/Trabajos/16.jpg';
import work_17 from '../../assets/Trabajos/17.jpg';
import work_18 from '../../assets/Trabajos/18.jpg';
import work_19 from '../../assets/Trabajos/19.jpg';
import work_20 from '../../assets/Trabajos/20.jpg';
import work_21 from '../../assets/Trabajos/21.png';
import work_22 from '../../assets/Trabajos/22.png';
import work_23 from '../../assets/Trabajos/23.png';
import work_24 from '../../assets/Trabajos/24.png';
import work_25 from '../../assets/Trabajos/25.png';
import work_26 from '../../assets/Trabajos/26.jpg';
import work_27 from '../../assets/Trabajos/27.jpg';
import work_28 from '../../assets/Trabajos/28.png';
import work_29 from '../../assets/Trabajos/29.png';
import work_30 from '../../assets/Trabajos/30.png';
import work_31 from '../../assets/Trabajos/31.png';
import work_32 from '../../assets/Trabajos/32.png';
import work_33 from '../../assets/Trabajos/33.png';
import work_34 from '../../assets/Trabajos/34.png';
import work_35 from '../../assets/Trabajos/35.png';
import work_36 from '../../assets/Trabajos/36.png';
import work_37 from '../../assets/Trabajos/37.png';
import work_38 from '../../assets/Trabajos/38.png';
import work_39 from '../../assets/Trabajos/39.png';
import work_40 from '../../assets/Trabajos/40.png';
import work_41 from '../../assets/Trabajos/41.png';
import work_42 from '../../assets/Trabajos/42.png';
import work_43 from '../../assets/Trabajos/43.png';
import work_44 from '../../assets/Trabajos/44.png';
import work_45 from '../../assets/Trabajos/45.png';
import work_46 from '../../assets/Trabajos/46.png';
import work_47 from '../../assets/Trabajos/47.png';
import work_48 from '../../assets/Trabajos/48.png';
import work_49 from '../../assets/Trabajos/49.png';

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
                        <img className='collage-img' src={work_31} alt="Proyecto 1" />
                        <img className='collage-img' src={work_32} alt="Proyecto 2" />
                        <img className='collage-img' src={work_33} alt="Proyecto 3" />
                        <img className='collage-img' src={work_34} alt="Proyecto 4" />
                        <img className='collage-img' src={work_35} alt="Proyecto 4" />
                        <img className='collage-img' src={work_36} alt="Proyecto 4" />
                        <img className='collage-img' src={work_37} alt="Proyecto 4" />
                        <img className='collage-img' src={work_38} alt="Proyecto 4" />
                        <img className='collage-img' src={work_39} alt="Proyecto 4" />
                        <img className='collage-img' src={work_40} alt="Proyecto 4" />
                        <img className='collage-img' src={work_41} alt="Proyecto 4" />
                        <img className='collage-img' src={work_42} alt="Proyecto 4" />
                        <img className='collage-img' src={work_43} alt="Proyecto 4" />
                        <img className='collage-img' src={work_44} alt="Proyecto 4" />
                        <img className='collage-img' src={work_45} alt="Proyecto 4" />
                        <img className='collage-img' src={work_46} alt="Proyecto 4" />
                        <img className='collage-img' src={work_47} alt="Proyecto 4" />
                        <img className='collage-img' src={work_48} alt="Proyecto 4" />
                        <img className='collage-img' src={work_49} alt="Proyecto 4" />
                                          
                    </div>
                </div>

                <button className='flecha derecha' onClick={scrollRight}>›</button>
            </div>           
        </div>
    );
};

export default SeccionTrabajos;