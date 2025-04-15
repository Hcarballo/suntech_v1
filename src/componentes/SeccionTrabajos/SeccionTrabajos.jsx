import './SeccionTrabajos.css';
import work_1 from '/src/assets/collage_cam_1.png';
import work_2 from '/src/assets/collage_funes_1.png';
import work_3 from '/src/assets/collage_roldan_1.png';


const SeccionTrabajos = () => {
    return (
        <div className='secciontrabajos'>
            <div className='titulotrabajos'>
                <h2>Nuestros Proyectos</h2>
            </div>
            <div className='trabajos'>
                <img className='collage-img' src={work_1} alt="logo" srcset="" />
                <img className='collage-img' src={work_2} alt="logo" srcset="" />
                <img className='collage-img' src={work_3} alt="logo" srcset="" />
            </div>
        </div>

    )
}

export default SeccionTrabajos