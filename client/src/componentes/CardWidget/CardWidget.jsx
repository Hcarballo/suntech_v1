import "./CardWidget.css";
import imgCard from "/src/assets/Icons/carrito-de-compras.png";

const CardWidget = () => {
  return (
    <div>
 <img className='imgCarrito' src={imgCard} alt="Carrito de Compras" srcset="" />
 <strong>4</strong>
    </div>   
  )
}

export default CardWidget
