export const getSearch = (requestURL, requestBody, method) => {
  if (method === 'GET') {
    return fetch(requestURL).then((res) => res.json());
  } else if (method === 'POST') {
    return fetch(requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    }).then((res) => res.json());
  } else if (method === 'PUT') {
    return fetch(requestURL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    }).then((res) => res.json());
  } else if (method === 'DELETE') {
    return fetch(requestURL, {
      method: 'DELETE',
    }).then(() => ({ status: 'Delete successful' }));
  }
};
