export const getSearch = (search) => {
  return fetch(`${search}`)
    .then((res) => res.json())
    .then((json) => json.results());
};
