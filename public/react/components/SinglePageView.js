import apiURL from "../api";

export const SinglePageView= ({item, setSingleViewItem}) => {

    return (
    <>
      <h3>{item.title}</h3>
      <h2>${item.price}</h2>
      <img src={item.image} alt={item.name}/>
      <p>Description {item.description}</p>
      <p>{item.category}</p>
      <button onClick={() => setSinglePageView(null)}>Return to InventoryS </button>
    </>
    );
};