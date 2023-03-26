import ProduceItem from "./ProduceItem";

const ProduceList = ({ produceProducts, showUpdateForm }) => {
  const productNodes = produceProducts.map((item, index) => {
    return (
      <ProduceItem key={index} item={item} showUpdateForm={showUpdateForm} />
    );
  });

  return <div className="produce-list">{productNodes}</div>;
};

export default ProduceList;
