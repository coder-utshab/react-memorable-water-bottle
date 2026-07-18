
// const Bottle = ({bottle}) => {
//     console.log(bottle)
//     return (
//         <div>
//             <h3>Bottle</h3>
//         </div>
//     );
// };

// export default Bottle;


const Bottle = ({ bottle }) => {
    const {name, img, price} = bottle;

    console.log(bottle)

    return (
        <div>
            <h3>Bottle {name}</h3>
            <img src={img} alt=""/>
        </div>
    );
};

export default Bottle;