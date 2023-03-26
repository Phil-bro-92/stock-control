const baseURL = "http://localhost:9000/api/users/";

export const getUsersItems = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postUsersItem = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
