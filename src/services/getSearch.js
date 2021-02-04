export const getSearch = (httpSearch) => {
  return fetch(`${httpSearch}`).then((res) => res.websites);
};
