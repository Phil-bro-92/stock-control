import { useEffect } from "react";
import { deleteProduceItem } from "../../services/ProduceServices";

const ProduceItem = ({ item, showUpdateForm }) => {
  // FUNCTIONS
  const handleProduceDelete = () => {
    deleteProduceItem(item._id);
  };

  const handleProduceUpdate = () => {
    showUpdateForm(item);
  };

  return (
    <div className="produce-item">
      <img className="produce-picture" src={item.picture} alt="product" />
      <h2 className="produce-name">Product Name: {item.product}</h2>
      <p className="produce-price">Price: £{item.price.standard}</p>
      <p className="produce-offer">Offer Price £{item.price.offer}</p>
      <p className="produce-origin">Country of Origin: {item.origin}</p>
      <p className="produce-quantity">Quantity: {item.quantity}</p>
      <p className="produce-stock_level">Stock Level: {item.stock_level}</p>
      <form onSubmit={handleProduceDelete}>
        <input type="submit" value="Delete Product Line" />
      </form>
      <form onSubmit={handleProduceUpdate}>
        <input type="submit" value="Update Product Line" />
      </form>
    </div>
  );
};

export default ProduceItem;
