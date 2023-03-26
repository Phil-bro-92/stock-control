import { useState, useEffect } from "react";
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
  return (
    <div>
      <button onClick={handleShowForm}>Add New Produce Line</button>
      {showForm ? <ProduceForm /> : null}
      <div className="produce-filter">
        <input type="text" placeholder="Filter Produce Products" />
      </div>
      {productList ? (
        <ProduceList
          produceProducts={produceProducts}
          showUpdateForm={showUpdateForm}
        />
      ) : null}
      {updateForm ? (
        <div>
          <img src={updateProduct.picture} />
          <form>
            <div>
              <label htmlFor="name">Product Name: </label>
              <input type="text" placeholder={updateProduct.product} name="name" />
            </div>
            <div>
              <label htmlFor="price">Price (£): </label>
              <input
                type="text"
                placeholder={updateProduct.price.standard}
                name="price"
              />
            </div>
            <div>
              <label htmlFor="offer">Offer (£): </label>
              <input
                type="text"
                placeholder={updateProduct.price.offer}
                name="offer"
              />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ProduceContainer;
