import "./SeccionThree.css";
import vela from "/src/assets/i_vela.png" ;
import ahorrolargo from "/src/assets/i_ahorro_largo.png";
import ahorro from "/src/assets/i_ahorro.png";
import recupero from "/src/assets/i_recupero.png";
import cuidadoequipos from "/src/assets/i_cuidado_equipos.png";

const SeccionThree = () => {
    return (
        <div className="seccionthree" id="s_three">
            <div className="card">
                <img src={vela} alt="Logo" />
                <h4>Olvidate de los Cortes de Luz</h4>
                <p>Con energía solar, tu hogar estará siempre iluminado, incluso cuando la red eléctrica falle. Disfruta de la autonomía energética y de la tranquilidad de nunca más depender de los cortes de luz</p>
            </div>
            <div className="card">
                <img src= {ahorrolargo} alt="Logo" />
                <h4>Cuidá el Planeta</h4>
                <br />
                <p>Con la energía solar, reducís tu huella de carbono y contribuyes a un futuro más limpio y sostenible. Aprovechá la energía del sol para cuidar nuestro hogar.</p>
            </div>
            <div className="card">
                <img src={ahorro} alt="Logo" />
                <h4>Ahorrá en tus consumos</h4>
                <p>Reduce tus gastos de electricidad y aprovechá la energía del sol para obtener un suministro más económico y sostenible. ¡Tu factura puede ser mucho más baja!</p>
            </div>
            <div className="card">
                <img src={recupero} alt="Logo" />
                <h4>Recuperá la inversión</h4>
                <p>Invertir en energía solar es una decisión inteligente: reducís tus costos de energía y en poco tiempo recuperás lo invertido, generando ahorros a largo plazo.</p>
            </div>
            <div className="card">
                <img src={cuidadoequipos} alt="Logo" />
                <h4>Protegé tus Equipos</h4>
                <p>Evita daños por sobrecargas y cortes inesperados con un sistema solar que asegura un suministro constante y estable para tus equipos</p>
            </div>
        </div>
    )
}

export default SeccionThree