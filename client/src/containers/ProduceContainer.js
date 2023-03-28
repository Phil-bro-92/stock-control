import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import ProduceForm from "../components/produce/ProduceForm";
import ProduceList from "../components/produce/ProduceList";
import { getProduceItems } from "../services/ProduceServices";
import { updateProduceItem } from "../services/ProduceServices";

const ProduceContainer = () => {
  // STATE
  const [produceProducts, setProduceProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [productList, setProductList] = useState(true);
  const [filteredProduce, setFilteredProduce] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stockLevel, setStockLevel] = useState("");
  const [picture, setPicture] = useState("");

  //EFFECT
  useEffect(() => {
    getProduceItems().then((results) => {
      setProduceProducts(results);
    });
  }, []);

  //FUNCTIONS
  const handleShowForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };
  const showUpdateForm = (item) => {
    setUpdateForm(true);
    setUpdateProduct(item);
    setProductList(false);
  };
  const handleProduceFilter = (e) => {
    const filteredNodes = produceProducts.filter((result) => {
      return result.product
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredProduce(filteredNodes);
    if (e.target.value === "") {
      setFilteredProduce([]);
    }
  };
  // SORT BY IF ELSE STATEMENT
  if (sortBy === "" || sortBy === "alphabetical") {
    produceProducts.sort((a, b) => {
      if (a.product < b.product) {
        return -1;
      }
    });
  } else if (sortBy === "quantity-high") {
    produceProducts.sort((a, b) => {
      if (a.quantity > b.quantity) {
        return -1;
      }
    });
  } else if (sortBy === "quantity-low") {
    produceProducts.sort((a, b) => {
      if (a.quantity < b.quantity) {
        return -1;
      }
    });
  } else if (sortBy === "price-high") {
    produceProducts.sort((a, b) => {
      if (a.price.standard > b.price.standard) {
        return -1;
      }
    });
  } else if (sortBy === "price-low") {
    produceProducts.sort((a, b) => {
      if (a.price.standard < b.price.standard) {
        return -1;
      }
    });
  }
  const handleProduceSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleUpdateProductForm = (e) => {
    updateProduceItem(updateProduct._id, {
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
    <div>
      {!updateForm ? (
        <div>
          <button onClick={handleShowForm}>Add New Produce Line</button>
          {showForm ? <ProduceForm /> : null}
          <form className="produce-filter">
            <input
              type="text"
              placeholder="Filter Produce Products"
              onChange={handleProduceFilter}
            />
          </form>

          <select defaultValue={""} onChange={handleProduceSort}>
            <option disabled value="">
              Sort
            </option>
            <option value="alphabetical">Alphabetical</option>
            <option value="quantity-high">Quantity (High to Low)</option>
            <option value="quantity-low">Quantity (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="price-low">Price (Low to High)</option>
          </select>
        </div>
      ) : null}
      {productList ? (
        <ProduceList
          produceProducts={produceProducts}
          filteredProduce={filteredProduce}
          showUpdateForm={showUpdateForm}
        />
      ) : null}
      {updateForm ? (
        <div>
          <img src={updateProduct.picture} />
          <form onSubmit={handleUpdateProductForm}>
            <div>
              <label htmlFor="name">Product Name: </label>
              <input
                type="text"
                placeholder={updateProduct.product}
                name="name"
                required
                onChange={handleProductChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price (£): </label>
              <input
                type="number"
                step={0.01}
                placeholder={updateProduct.price.standard}
                name="price"
                required
                onChange={handlePriceChange}
              />
            </div>
            <div>
              <label htmlFor="offer">Offer (£): </label>
              <input
                type="number"
                step={0.01}
                placeholder={updateProduct.price.offer}
                name="offer"
                required
                onChange={handleOfferChange}
              />
            </div>
            <div>
              <label htmlFor="origin">Origin: </label>
              <input
                type="text"
                placeholder={updateProduct.origin}
                name="origin"
                required
                onChange={handleOriginChange}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                placeholder={updateProduct.quantity}
                name="quantity"
                required
                onChange={handleQuantityChange}
              />
            </div>
            <div>
              <label htmlFor="picture">Picture (URL): </label>
              <input
                type="text"
                placeholder={updateProduct.picture}
                name="picture"
                required
                onChange={handlePictureChange}
              />
            </div>
            <div>
              <input type="submit" value="Update Product" />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ProduceContainer;
