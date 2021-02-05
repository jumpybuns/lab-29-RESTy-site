export const getSearch = (requestURL, requestBody, method) => {
  if (method === 'GET') {
    return fetch(requestURL).then((res) => res.json());
  } else if (method === 'POST') {
    return fetch(requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    }).then((res) => res.json());
  }
};
