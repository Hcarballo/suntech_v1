import "./CardWidget.css";
import imgCard from "/src/assets/carrito-de-compras.png";

const CardWidget = () => {
    //const imgCard = "/src/assets/carrito-de-compras.png";
  return (
    <div>
 <img className='imgCarrito' src={imgCard} alt="Carrito de Compras" srcset="" />
 <strong>4</strong>
    </div>
   
  )
}

export default CardWidget
