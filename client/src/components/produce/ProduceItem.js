import { useEffect } from "react";
import { deleteProduceItem } from "../../services/ProduceServices";
import { Button, FormControl, Input } from "@mui/material";

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
      <h2 className="produce-name">{item.product}</h2>
      <p className="produce-price">Price: £{item.price.standard}</p>
      <p className="produce-offer">Offer Price £{item.price.offer}</p>
      <p className="produce-origin">Origin: {item.origin}</p>
      <p className="produce-quantity">Quantity: {item.quantity}</p>
      <p className="produce-stock_level">Stock Level: {item.stock_level}</p>
      <FormControl className="produce-update">
        <form onSubmit={handleProduceUpdate}>
          <Button variant="contained" color="warning" type="submit">
            Update Product Line
          </Button>
        </form>
      </FormControl>
      <FormControl className="produce-delete">
        <form onSubmit={handleProduceDelete}>
          <Button variant="contained" color="error" type="submit">
            Delete Product Line
          </Button>
        </form>
      </FormControl>
    </div>
  );
};

export default ProduceItem;
