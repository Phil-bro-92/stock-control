import { useState } from "react";

const ProduceForm = () => {
  // STATE
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [offer, setOffer] = useState(null);
  const [newProduct, setNewProduct] = useState({
    product: product,
    price: {
      standard: price,
      offer: offer
    },
  });
  // FUNCTIONS
  const handleAddProduceForm = {};
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <form className="produce-form" onSubmit={handleAddProduceForm}>
      <div>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={handleProductChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Price"
          onChange={handlePriceChange}
          required
        />
      </div>
      <div>
        <input type="text" placeholder="Enter Offer Price" />
      </div>
      <div>
        <input type="text" placeholder="Enter Origin" />
      </div>
      <div>
        <input type="text" placeholder="Enter Quantity" />
      </div>
      <div>
        <input type="text" placeholder="Enter image URL" />
      </div>
      <div>
        <input type="submit" placeholder="Enter Quantity" />
      </div>
    </form>
  );
};

export default ProduceForm;
