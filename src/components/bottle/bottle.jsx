// import './bottle.css';


// const Bottle = ({ bottle }) => {
//     const {name, img, price} = bottle;

//     console.log(bottle)

//     return (
//         <div className="bottle">
//             <h3>Bottle {name}</h3>
//             <img src={img} alt=""/>
//             <p>Price: ${price}</p>
//         </div>
//     );
// };

// export default Bottle;



import "./bottle.css";

const Bottle = ({ bottle }) => {
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      <img src={img} alt={name} />

      <h3>{name}</h3>

      <p>Price: ${price}</p>
    </div>
  );
};

export default Bottle;