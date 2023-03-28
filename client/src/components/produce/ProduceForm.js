import { useState } from "react";
import { postProduceItem } from "../../services/ProduceServices";
import { FormControl, TextField, Button } from "@mui/material";

const ProduceForm = () => {
  // STATE
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [offer, setOffer] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [stockLevel, setStockLevel] = useState(null);
  const [picture, setPicture] = useState(null);

  // FUNCTIONS
  const handleAddProduceForm = () => {
    postProduceItem({
      product: product,
      price: {
        standard: price,
        offer: offer,
      },
      origin: origin,
      quantity: quantity,
      stock_level: stockLevel,
      picture: picture,
    });
  };
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleOfferChange = (e) => {
    setOffer(e.target.value);
  };
  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    if (e.target.value < 21) {
      setStockLevel("Low");
    } else if (e.target.value < 51) {
      setStockLevel("Medium");
    } else {
      setStockLevel("High");
    }
  };
  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  return (
    <FormControl margin="normal" color="error"fullWidth>
      <form onSubmit={handleAddProduceForm}>
      <div>
        <TextField
          type="text"
          label="Product"
          onChange={handleProductChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          type="number"
          step={0.01}
          label="Price"
          onChange={handlePriceChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          type="number"
          step={0.01}
          label="Offer Price"
          onChange={handleOfferChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Origin"
          onChange={handleOriginChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          type="number"
          label="Quantity"
          onChange={handleQuantityChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Image URL"
          onChange={handlePictureChange}
          required
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <Button type="submit"  variant="contained" >Add Product</Button>
      </div>
      </form>
    </FormControl>
  );
};

export default ProduceForm;
