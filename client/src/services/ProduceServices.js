const baseURL = "http://localhost:9000/api/produce/";

export const getProduceItems = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postProduceItem = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const updateProduceItem = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteProduceItem = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
