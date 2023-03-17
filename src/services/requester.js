const baseUrl = 'https://planet-link-api.onrender.com';

async function request(method, path, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers['content-type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(baseUrl + path, options);

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const remove = request.bind(null, 'DELETE');
export const put = request.bind(null, 'PUT');