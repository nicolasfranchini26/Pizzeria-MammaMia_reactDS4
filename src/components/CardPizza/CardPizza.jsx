import "./CardPizza.css";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="Card m-3 p-2 " >
      <img className="rounded" src={img} alt={name} />
      <div className="Titulo">
        <h3>Pizza {name}</h3>
      </div>
      <hr />
      <p className="descripcion mb-2 text-start"> {desc} </p>
      <p className="ingredients mb-2 text-center"><b>Ingredientes:</b></p>
      {/* <hr />
      <p className="text-center"> {ingredientes}</p> */}
      <ul className="lista de ingredientes m-1">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}.</li>
        ))}
      </ul>
      <hr />
      <p className="precio text-center">
        <strong>${price}</strong>
      </p>

      <div className="btn d-flex justify-content-evenly">
        <button className="btn-vermas">Ver más 👀</button>
        <button className="btn-añadir">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
