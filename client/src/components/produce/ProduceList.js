import ProduceItem from "./ProduceItem";

const ProduceList = ({ produceProducts, filteredProduce, showUpdateForm }) => {

  let res;

  if (filteredProduce.length > 0) {
    res = filteredProduce;
  } else {
    res = produceProducts;
  }

  const productNodes = res.map((item, index) => {
    return (
      <ProduceItem key={index} item={item} showUpdateForm={showUpdateForm} />
    );
  });

  return <div className="produce-list">{productNodes}</div>;
};

export default ProduceList;
